"use client";

import { PopoverGroup } from "@headlessui/react";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>

        <PopoverGroup className="flex gap-x-12">
          <div className="flex items-center space-x-6">
            <h1 className="text-sm font-semibold leading-6 text-gray-900">
              푸쉬 알림 테스트
            </h1>
          </div>
        </PopoverGroup>
        <div className="flex lg:flex-1 lg:justify-end">오른쪽 버튼</div>
      </nav>
    </header>
  );
}
