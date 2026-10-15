import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import InquiryForm from './InquiryForm';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '../data';

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow eyebrow-dark">Contact</p>
          <h2>Let's build something that works.</h2>
          <p className="lede">Tell us about your business, the challenge you're facing, or the software you want to build.</p>
          <a className="phone" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <div className="cta-row">
            <a className="btn btn-primary" href={PHONE_TEL}><Phone size={18} aria-hidden /> Call VYRA</a>
            <a className="btn btn-outline-dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden /> WhatsApp VYRA</a>
            <a className="btn btn-outline-dark" href="#inquiry"><ArrowDown size={18} aria-hidden /> Discuss a project</a>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
