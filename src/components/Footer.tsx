export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
        <p>&copy; {currentYear} Niranjan L. All rights reserved.</p>
        <p className="mt-4 md:mt-0 font-medium">Built with precision and purpose.</p>
      </div>
    </footer>
  )
}
