import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="container">
          <div id="branding">
            <h1><span class="highlight">BlackSail</span> Cyber Security</h1>
          </div>
          <nav>
            <u1>
              <li className="current"><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
            </u1>
          </nav>
        </div>
      </header>

      <section id="showcase">
        <div className="container">
          <h1>Affordable & Professional Cyber Consulting</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus et augue vitae iaculis. Suspendisse fringilla ex ut odio ultrices, vel aliquam nulla mollis.</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email"autoComplete="off" placeholder="Enter your Email..." />
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
          <div className="box">
            <Image src="/img/blue_team.png" alt="Defensive Testing" width={400} height={100} />  {/* Added alt text for accessibility */}
            <h3>Defensive Testing</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/red_team.png" alt="Offensive Testing" width={400} height={100}/>  {/* Added alt text for accessibility */}
            <h3>Offensive Testing</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/cyber.png" alt="Professional Services" width={400} height={100}/>  {/* Added alt text for accessibility */}
            <h3>Professional</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>BlackSail Cyber, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;