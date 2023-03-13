import { Fragment, useState } from "react";
import "./NavBar.css";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white  stick">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between  p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1  ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto"
              src="https://suffixit.com/static/media/Suffix-Logo.73142c9b.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            <FontAwesomeIcon className="slider" icon={faSliders} />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Link
            to="/"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Popover className="relative">
            <Link to="/products">
              {" "}
              <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
            </Link>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Career
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 bg-blue-500 rounded-md shadow-2xl px-10 py-2 text-white"
          >
            Contact
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          data-aos="fade-right"
          className="fixed inset-y-0 left-0 z-10 d-width overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto "
                src="https://suffixit.com/static/media/Suffix-Logo.73142c9b.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              <img
                className="h-8 w-10 opacity-50"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAACWCAMAAACyyweYAAAA4VBMVEUAAAD3GRz6EQD6EQD7Gwz2HiDzKCr7JRD6EQD5EQD/EAD6EQD6EAD7EQH5EgT7EQD6EQD6EQD6EQD5EQD1HRX7EQD6EQD6EQD6EAD7EQD6EgD6EQD6EQD6EAD5EQD6EQD6EQD6EQD6EQD6EAD5EQD5EwD6EQD7EQD8EQD4DwH6EQD5EQD3DwD6EAD6EQD7EAD6DwD6EQD6EQDsIhj6EAD6EQD7EQD/DQD6EQD6EAD6EQD6EAD5EQD6EAD2EgD6EQD6EQD6EQD6EgH6FgT6IBD6GQn6TUH5Khv6MST6Qjf6PDAFm8DQAAAAQXRSTlMAAv75DAYECfZaFvznPC+u7ttjVw/i+9/KQzbrs15S8tDEj20rKMB3SCSphh+7onwy1Gkb2JRwEqWbmky3ixyfmIr4wMQAAAdeSURBVHja7d1nU+JAHMfx/6aBoSMgvSkdsfd2v6Dn6ft/QYeKpxTZJdkUb/w4+MwZv7O7JIQs0I8fP3788NEGBYWxE9/eK5A9nUSIiBj5rXuAF32yR1OTBaJDg3y108Ar9YxsagK7PXZ5S/4xLzBVILtYDcBxtdFh5Ln40GRaKxHB1AnZcqYTUUzBq+imxyGsDKCWwz8pRvbsVj91IBojDx1lMStikk3GcT806Yhgqu7diGzkMOeKbDGvJo9ksvW5AyVvQm53Me+SbNrZIOopaoVogA/RDbdDWOEaC1LM/sCeGFQARqEE4F1I7xiL1BbZl87rNACSsTIWQ5hGbqiGscQhOTEq3dIIQB3/fDz9ap0eO5JegWXK5MTRdl/tGh8N8yEbN90BI2kyhnGDZcIaOTJMQbkZKvgihDL9UjZOkpydxkpYqkoO6XUgtQV8FcIKSaVpkAxsdKVA/pQKGZPHhnaAVY6LoWtE4zIq2hUFbkypoy6R2ejXsFLCrKg4Jacy7WgN7kyp1olORh4c6p5Zx8GZw3VRwlfq5FSoHSOjAZ6D4kAJd8mB2NcVSo+c6w8MugGP0uwmceKgIoIv3ZAMp3lToAOlzTwOdBcqjnWSYiN8qDfAlzhRwnGyo6OAM6VkiJe2KhBQK1uo2KnACockjZYCxhAwBhK61IoGScQSeBhDzPGQ1sH2sEJSI6kOcxBVu1rvssEKSoskK0YhxPpjKU1JFTgl6c4awh1oGCQks4VVdskF7BeElUwSoGWxStYgV1xFIMZCrUtc+ypWCZvkkmFJMOMRSpU4ijmsVCDXaG0IGT8DnFe3+5yKPXIRGwh2PI3RZvZnFK4ZuaqrQMjjGNkz+soOpyIaIpcNk6LrHKUYLZfJYqXIkFwXykNUpEDL6JwKdMkDrAkOzkpNcP/IG1dhiNplnHPaRWVGHrndEu/Q6cygDxpvLLI6eUbfhahoK3RS+RcS4q0L1SQvbUPYxVmzVBFcFyiSt2JhiMpdNJE3heK3yWvaAdahpifpOazWJ++xO6xFDSNAy/uTqgqZ1Az5o5eCPLkd8ovehzRp8tFhBHJ0yFf7NchwTj7TGnDumHzHTuBUKkQBkI7AkXCPAqGYhANqQCqIMnXYV6HAYP3/oWJiT4EtdxQsBeVbHjAWHCWxtgOdAsfcwpyAnptzGA2sJTykQGJtrEENaMWaHZsUWOzkf6iYGEBMm4LtF8QEZ5fLMiHRd9eC3VEGYAGWhTfW9NdCxjjIHQO8s14eU5g+PueM/wS3I41Ppv8+rDl48/AU1I405kwj/v36AAsPv5VAdqTxBWvyM98xMQ5kRxp8rzXTZYNAdpxjfZOOgB3NJxW2OoJ1VnIOe5SnIHWcwy7rOTgdI9hnBeY4OIIj98EYjzQcGmObfJeGBL/IZzs5/AcdGRVyNMlHoSz4Drph8BXIP33w1XXStsBV08kvd+C7oAk9gVlBuqJ7CL5LesUuAzut0uIVE9sRcIQz5IO4KjKjPhRnOwLybqZoxYdeNHgd+wIVlws7FbkdLfJUPAeuCs1j1/jM9zv1tCy4NmiJTpDmld2Kic0Ir0MnbwgdlCu271Q8IW/Ew/YrJswSVorEyQtx1daM+qC3sVJNowXBq+CfmWy537GfA094w+ltDVm3O+ICFS3iKyh+jkdcFavgGybFO3yoSLZIjJnHlOVxhxaFxIOw0cDUmNvh8VHvOkRraOKNdY8lwjs05XVFn9ZzpeDN4xiLVDc6WBs8h7SuQu29435ZR1x+RRkcapHWd/Q+xPd/PBmPBDi2Ws42GT38HrvfMQBHSnO6ycj6fe92xzY4EkzCJqPnJ06H2xWnjBy4PcCb+yUTS62QRxekIl1yxrjDG+vpUfLuDvF96tF9cqyivA/IsyWzQ/wyWTtDErSimHp84HfIr+gzmpC5//mB1yH/ZVLklKS5xJsxxlJvA+dfQA7HSKK0+hbRqGHByMVn2qxJUsVrgPVoKSdlLGiH3DoDGRkkmXYM4PkB+WqJ81lF0iqUU5KP7QH4c4/a1YWCOeG4CxXJFrliPwrcPwIXOynMq0ivaGjkEtZUYN3j4bi1+KlSl7rUzdTKIXE4HRDgbvf0aBdz6uZ6FaloPzK67TQ38kiWryOYkeoRh/MBAfLb5Uw1jFm1IonbSVXMeoteFI7m33NVBga5rZi/hprtlmOZa8xSqiTqatNgTfbF8aM+JA8Y8V45kdjb/MViScxqGiTEMIh0+iR0oGKqVCWP6HrsPD0y73ZCI8zKa2SPkcKr3A0jL21WL4bVNM0PSLJHduh5vFDOQ+QxphX2Mx1NHymcBSJcoSRuyQ/GEYtlKL6FGQO2fkVSAepx8kvGmKSw0wg+a4TWrNg9TaNeJB8xRhmd5g6GyfUmR0HrTCJ8Z4SIClF8omyud9IZgIgX+qRl9t22dZ43df+/Z+cTszF3OeO76mbxIRmQmWKD3lETCt51AjVZ1nL2az+Pd2X6vjJsOxdGPQVAMek7M5u9ATOr3e+7yqf0AHxZ2Y/l/gKUiZLeYVs01gAAAABJRU5ErkJggg=="
                alt="Close menu"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-20 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <a
                        href="#"
                        className="-mx-0 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="-mx-0 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About
                      </a>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Career
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
