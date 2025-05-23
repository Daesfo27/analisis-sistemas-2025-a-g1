"use client";

import React from "react";
import Aside from "../components/aside.components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "../hooks/useLayout";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const { title, routes } = useLayout(pathname);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-emerald-100 flex">
      <aside className="w-72 bg-emerald-700 text-white shadow-md py-8 px-6 flex flex-col">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold hover:text-gray-950 transition duration-300 block">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-4xl">📚</span>
              <span className="text-2xl text-white hover:text-neutral-950 font-semibold">BookSwap</span>
            </div>
          </Link>
        </div>
        <Aside />
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold text-emerald-800">{title}</h1>
          </div>
          <nav className="bg-emerald-100 rounded-lg shadow-sm p-2">
            <ul className="flex space-x-6">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`py-2 px-3 rounded-md font-medium text-sm transition-colors duration-200 ${
                      pathname === route.path
                        ? "bg-emerald-500 text-white"
                        : "text-emerald-600 hover:bg-emerald-200 hover:text-emerald-800"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="bg-white rounded-xl shadow-lg p-8">
          {children}
        </section>
      </main>
    </div>
  );
}