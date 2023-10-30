import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header className="bglight">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className=""></span>
              </a>
          </div>
          
          <Popover.Group className=" flex gap-x-12">
            
  
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              <Link to='/'>Home</Link>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </a>
           
          </Popover.Group>
          <div className="flex flex-1 justify-end ">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              
            </a>
          </div>
        </nav>
       
      </header>
    )
}

export default Header
