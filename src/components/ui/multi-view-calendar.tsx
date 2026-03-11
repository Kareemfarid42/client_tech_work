import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    format,
    addMonths,
    subMonths,
    addYears,
    subYears,
    getDaysInMonth,
    startOfMonth,
    getDay,
    isSameDay,
    setMonth,
    setYear,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomDatePickerProps {
    value?: Date;
    onChange: (date: Date) => void;
    className?: string;
}

type ViewState = "days" | "months" | "years";

export const CustomDatePicker = ({
    value,
    onChange,
    className,
}: CustomDatePickerProps) => {
    const [view, setView] = useState<ViewState>("days");
    const [displayDate, setDisplayDate] = useState<Date>(value || new Date());

    // A 4x3 grid for years = 12 years.
    const currentYear = displayDate.getFullYear();
    const startYear = Math.floor(currentYear / 12) * 12;

    // Sync internal display date if value changes from outside
    useEffect(() => {
        if (value) {
            setDisplayDate(value);
        }
    }, [value]);

    const handlePrevious = () => {
        if (view === "days") setDisplayDate(subMonths(displayDate, 1));
        else if (view === "months") setDisplayDate(subYears(displayDate, 1));
        else if (view === "years") setDisplayDate(subYears(displayDate, 12));
    };

    const handleNext = () => {
        if (view === "days") setDisplayDate(addMonths(displayDate, 1));
        else if (view === "months") setDisplayDate(addYears(displayDate, 1));
        else if (view === "years") setDisplayDate(addYears(displayDate, 12));
    };

    const handleHeaderClick = () => {
        if (view === "days") setView("months");
        else if (view === "months") setView("years");
    };

    const generateDays = () => {
        const daysInMonth = getDaysInMonth(displayDate);
        const startDay = getDay(startOfMonth(displayDate));
        const days = [];

        // Empty slots for days before the start of the month
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        // Actual days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(displayDate.getFullYear(), displayDate.getMonth(), i));
        }
        return days;
    };

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const generateYears = () => {
        const years = [];
        for (let i = 0; i < 12; i++) {
            years.push(startYear + i);
        }
        return years;
    };

    const variants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
    };

    return (
        <div
            className={cn(
                "w-full sm:w-[320px] p-3 sm:p-4 bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden select-none",
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={(e) => { e.preventDefault(); handlePrevious(); }}
                    className="p-1.5 sm:p-2 rounded-md hover:bg-white/10 text-white transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" />
                </button>

                <button
                    onClick={(e) => { e.preventDefault(); handleHeaderClick(); }}
                    className="text-white font-semibold text-xs sm:text-sm hover:bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors"
                    disabled={view === "years"}
                >
                    {view === "days" && format(displayDate, "MMMM yyyy")}
                    {view === "months" && format(displayDate, "yyyy")}
                    {view === "years" && `${startYear} - ${startYear + 11}`}
                </button>

                <button
                    onClick={(e) => { e.preventDefault(); handleNext(); }}
                    className="p-1.5 sm:p-2 rounded-md hover:bg-white/10 text-white transition-colors"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" />
                </button>
            </div>

            {/* Grid Container */}
            <div className="relative h-[220px] sm:h-64">
                <AnimatePresence mode="wait">
                    {view === "days" && (
                        <motion.div
                            key="days"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0"
                        >
                            <div className="grid grid-cols-7 gap-1 text-center mb-1 sm:mb-2">
                                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                    <div key={day} className="text-[10px] sm:text-xs text-[#888888] font-medium py-1">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {generateDays().map((date, index) => {
                                    if (!date) {
                                        return <div key={`empty-${index}`} className="h-8 w-full sm:h-9" />;
                                    }

                                    const isSelected = value && isSameDay(date, value);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <button
                                            key={date.toISOString()}
                                            onClick={(e) => { e.preventDefault(); onChange(date); }}
                                            className={cn(
                                                "h-8 sm:h-9 w-full rounded-md text-xs sm:text-sm transition-all flex items-center justify-center",
                                                isSelected
                                                    ? "bg-[#17aa8c] text-black font-bold shadow-[0_0_10px_rgba(23, 170, 140,0.5)]"
                                                    : "text-white hover:bg-white/10",
                                                !isSelected && isToday && "border border-[#17aa8c]/50 text-[#17aa8c]"
                                            )}
                                        >
                                            {date.getDate()}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {view === "months" && (
                        <motion.div
                            key="months"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center"
                        >
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
                                {months.map((monthStr, index) => {
                                    const isSelectedMonth =
                                        value?.getMonth() === index &&
                                        value?.getFullYear() === displayDate.getFullYear();

                                    return (
                                        <button
                                            key={monthStr}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setDisplayDate(setMonth(displayDate, index));
                                                setView("days");
                                            }}
                                            className={cn(
                                                "py-3 sm:py-4 rounded-md text-xs sm:text-sm transition-all text-center border",
                                                isSelectedMonth
                                                    ? "bg-[#17aa8c] text-black font-bold shadow-[0_0_10px_rgba(23, 170, 140,0.5)] border-transparent"
                                                    : "text-white hover:bg-white/10 bg-[#111111]/50 border-white/5"
                                            )}
                                        >
                                            {monthStr}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {view === "years" && (
                        <motion.div
                            key="years"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center"
                        >
                            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full">
                                {generateYears().map((year) => {
                                    const isSelectedYear = value?.getFullYear() === year;

                                    return (
                                        <button
                                            key={year}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setDisplayDate(setYear(displayDate, year));
                                                setView("months");
                                            }}
                                            className={cn(
                                                "py-3 sm:py-4 rounded-md text-xs sm:text-sm transition-all text-center border",
                                                isSelectedYear
                                                    ? "bg-[#17aa8c] text-black font-bold shadow-[0_0_10px_rgba(23, 170, 140,0.5)] border-transparent"
                                                    : "text-white hover:bg-white/10 bg-[#111111]/50 border-white/5"
                                            )}
                                        >
                                            {year}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
