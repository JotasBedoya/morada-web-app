import { Menu } from "../Menu"
import { PageWrapper } from "./styles"


export const Page = (props) => (
  <>
    <PageWrapper>
        { props.children }
    </PageWrapper>
    <Menu/>
  </>
)