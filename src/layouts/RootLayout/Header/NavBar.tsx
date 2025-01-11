import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About Me", to: "/about" },
    { id: 2, name: "Work", to: "/work" }
  ]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
