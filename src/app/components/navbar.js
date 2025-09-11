'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    }

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/images/logo.png" alt="Logo" width={70} height={100} />
                            <span className="text-2xl font-bold text-foreground">Power100</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link href="/" className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md">
                            HOME
                        </Link>
                        <Link href="/about" className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md">
                            ABOUT
                        </Link>

                        {/* MATCHES Dropdown */}
                        <DropdownMenu open={openDropdown === 'matches'} onOpenChange={() => toggleDropdown('matches')}>
                            <DropdownMenuTrigger className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md flex items-center">
                                MATCHES
                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'matches' ? 'rotate-180' : ''}`}
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Matches</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Live</DropdownMenuItem>
                                <DropdownMenuItem>Scoreboard</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* STATS Link */}
                        <Link href="/stats" className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md">
                            STATS
                        </Link>

                        {/* PRODUCT Dropdown */}
                        <DropdownMenu open={openDropdown === 'product'} onOpenChange={() => toggleDropdown('product')}>
                            <DropdownMenuTrigger className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md flex items-center">
                                PRODUCT
                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'product' ? 'rotate-180' : ''}`}
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Product</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Product Detail</DropdownMenuItem>
                                <DropdownMenuItem>Shopping Cart</DropdownMenuItem>
                                <DropdownMenuItem>Checkout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* NEWS Dropdown */}
                        <DropdownMenu open={openDropdown === 'news'} onOpenChange={() => toggleDropdown('news')}>
                            <DropdownMenuTrigger className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md flex items-center">
                                NEWS
                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'news' ? 'rotate-180' : ''}`}
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>News</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>News Details</DropdownMenuItem>
                                <DropdownMenuItem>Latest News</DropdownMenuItem>
                                <DropdownMenuItem>Upcoming Events</DropdownMenuItem>
                                <DropdownMenuItem>Newsletter</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/contact" className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md">
                            CONTACT US
                        </Link>
                        <Link href="/register" className="text-foreground hover:text-primary hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md">
                            REGISTER
                        </Link>
                    </div>

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="p-3 hover:bg-primary/10 transition-colors">
                            <ShoppingBag className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-3 hover:bg-primary/10 transition-colors">
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
