import { HeaderContainer, HomeLink, List, ListItem } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HomeLink href="/">RODOLFO</HomeLink>
      <List>
        <ListItem>
          <a href="/about">ABOUT</a>
        </ListItem>
        <ListItem>
          <a href="/resume">RESUME</a>
        </ListItem>
        <ListItem>
          <a href="/portfolio">PORTFOLIO</a>
        </ListItem>
        <ListItem>
          <a href="/contact">CONTACT</a>
        </ListItem>
        <ListItem>
          <a href="/blog">BLOG</a>
        </ListItem>
      </List>
    </HeaderContainer>
  );
};
