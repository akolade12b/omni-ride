import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Home } from '@/pages/home';
import { BookRide } from '@/pages/book-ride';
import { Drivers } from '@/pages/drivers';
import { About } from '@/pages/about';
import { Contact } from '@/pages/contact';
import { Profile } from '@/pages/profile';
import { Admin } from '@/pages/admin';
import { Rides } from '@/pages/rides';
import { SignIn } from '@/pages/signin';
import { SignUp } from '@/pages/signup';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookRide />} />
      <Route path="/rides" element={<Rides />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </RouterRoutes>
  );
}