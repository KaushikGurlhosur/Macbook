const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {[
            { label: "Store" },
            { label: "Mac" },
            { label: "iPhone" },
            { label: "Watch" },
            { label: "Vision" },
            { label: "Airpods" },
            { label: "Accessories" },
            { label: "Support" },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Search" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
