import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Back to About
          </Link>
        </Button>
      </div>
    </div>
  )
}

