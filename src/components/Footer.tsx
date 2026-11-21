export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm gap-4">
        <p>&copy; {currentYear} Niranjan L. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://www.behance.net/niranjanl3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 font-medium"
            aria-label="Behance profile"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.104 1.185.074 1.828h-8.814c.07 1.348 1.171 2.569 2.871 2.569 1.175 0 2.048-.485 2.507-1.228h3.186zm-5.174-5.404c-1.391 0-2.261.854-2.456 2.062h4.945c-.097-1.189-.968-2.062-2.489-2.062zm-13.552-6.596h5.864c3.414 0 5.094 1.63 5.094 4.093 0 1.536-.782 2.684-2.188 3.262 1.723.477 2.766 1.85 2.766 3.691 0 2.898-2.158 4.954-5.926 4.954h-5.61v-16zm3.176 6.551h2.247c1.365 0 2.296-.549 2.296-1.784 0-1.127-.852-1.688-2.176-1.688h-2.367v3.472zm0 6.368h2.477c1.551 0 2.592-.587 2.592-1.961 0-1.332-.977-1.924-2.529-1.924h-2.54v3.885z" />
            </svg>
            <span>Behance</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/niranjan-l-381b71394/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 font-medium"
            aria-label="LinkedIn profile"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="font-medium">Built with precision and purpose.</p>
      </div>
    </footer>
  )
}
