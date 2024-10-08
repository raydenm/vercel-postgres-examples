"use client"

import { useEffect } from "react"
import { useDebounceCallback } from "usehooks-ts"
import Add from "app/postgresql-admin/components/add"
import ChooseSql from "app/postgresql-admin/components/chooseSql"
import Header from "app/postgresql-admin/components/header"
import Paginator from "app/postgresql-admin/components/paginator"
import Search from "app/postgresql-admin/components/search"
import Tabel from "app/postgresql-admin/components/table"
import useStore from "app/postgresql-admin/store"

const Admin = () => {
  const { sqlConfig, searchValue, pageNumber, getTableData } = useStore((state) => state)
  const debounced = useDebounceCallback(getTableData, 500)

  useEffect(() => {
    debounced()
  }, [searchValue])

  useEffect(() => {
    getTableData()
  }, [sqlConfig, pageNumber])

  return (
    <section className="bg-white dark:bg-gray-900">
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center">
            <ChooseSql />
            <Search />
          </div>
          <Add />
        </div>
        <Tabel />
        <Paginator />
      </div>
    </section>
  )
}

export default Admin
