export default function Button({ children, variant = 'primary', ...props }) {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90',
      secondary: 'bg-secondary text-white hover:bg-secondary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10'
    }
  
    return (
      <button
        className={`rounded-full px-6 py-3 font-bold transition-colors ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    )
  }