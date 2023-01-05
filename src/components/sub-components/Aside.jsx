export default function Aside() {
  return (
    <div style={{ backgroundColor: "orchid" }}>
      <ul
        className="mt-2"
        style={{
          width: "15vw",
          height: "80vh",
          position: "sticky",
          top: "100px",
        }}
      >
        <li>
          <a href="#1" style={{ textDecoration: "none" }}>
            sub menu 1
          </a>
        </li>
        <li>
          <a href="#2" style={{ textDecoration: "none" }}>
            sub menu 2
          </a>
        </li>
        <li>
          <a href="#3" style={{ textDecoration: "none" }}>
            sub menu 3
          </a>
        </li>
        <li>
          <a href="#4" style={{ textDecoration: "none" }}>
            sub menu 4
          </a>
        </li>
      </ul>
    </div>
  );
}
