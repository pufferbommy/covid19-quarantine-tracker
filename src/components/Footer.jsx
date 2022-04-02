import { FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="fixed bottom-4">
      <div className="flex gap-3">
        <a href="http://github.com/pufferbommy">
          <FaGithub className="text-2xl md:text-xl hover:text-neutral-500 transition duration-300 ease-in-out" />
        </a>
        <a href="https://twitter.com/pufferbommy">
          <FaTwitter className="text-2xl md:text-xl hover:text-neutral-500 transition duration-300 ease-in-out" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
