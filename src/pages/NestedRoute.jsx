import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NestedRoute() {
  return (
        <section className="about">
            <nav>
                <Link replace to="/nestedRoute/first" >First</Link>
                <Link replace to="/nestedRoute/second" >Second</Link>
            </nav>

            <section>
                <Outlet />
            </section>

        </section>
  )
}
