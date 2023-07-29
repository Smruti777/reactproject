import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#DD6B20",
				textAlign: "center",
				marginTop: "-50px" }}>
	CASA LIVING: Happy furniture to you (:  !!!
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Corporate</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Corporate Governance</FooterLink>
			<FooterLink href="#">Pepperfry in the News</FooterLink>
		</Column>
		<Column>
			<Heading>Useful Links</Heading>
			<FooterLink href="#">Explore Gift Cards</FooterLink>
			<FooterLink href="#">Buy in Bulk</FooterLink>
			<FooterLink href="#">Discover Our Brands</FooterLink>
			<FooterLink href="#">Check Out Bonhomie, Our Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Partner with us</Heading>
			<FooterLink href="#">Sell on Pepperfry</FooterLink>
			<FooterLink href="#">Become a Franchisee</FooterLink>
			<FooterLink href="#">Become Our Channel Partner</FooterLink>
			<FooterLink href="#">Our Marketplace Policies</FooterLink>
            <FooterLink href="#">Merchant Dashboard Login</FooterLink>
		</Column>
		<Column>
			<Heading>Need Help?</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				FAQs
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Policies
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Contact us
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;