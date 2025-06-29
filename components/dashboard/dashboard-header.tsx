import { Button } from "@/components/ui/button"
import { CreateCourseDialog } from "@/components/dashboard/create-course-dialog"
import { ArrowRight } from "lucide-react"
import { SidebarTrigger } from "../ui/sidebar"

export function DashboardHeader() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-row items-center justify-between gap-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                    <SidebarTrigger className="block md:hidden" />
                </div>
                <CreateCourseDialog>
                    <Button
                        size="lg"
                        className="group relative bg-black text-white hover:bg-gray-800 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative">Create Page</span>
                        <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </CreateCourseDialog>
            </div>
        </div>
    )
} 