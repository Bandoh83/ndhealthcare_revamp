import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';


export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2 className ="cs_copyright">Follow Us</h2>
      <div className="cs_social_links">
        {/* <Link href="/">
          <Icon icon="fa-brands:facebook-f" />
        </Link> */}
        {/* <Link href="/">
          <Icon icon="fa-brands:youtube" /> */}
        {/* </Link>
        <Link href="/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link> */}
        <Link href="https://www.instagram.com/ndhealthcare_?igsh=ZHFhcWNqdWdncXFj">
          <Icon icon="fa-brands:tiktok" />
        </Link>
        <Link href="https://www.tiktok.com/@ndhealthcare?_t=ZM-8yeTyIJRpAr&_r=1">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
