const testimonials = [
  {
    name: "Vedant Kasar",
    text: "I improved my band score from 6.0 to 7.5 in just 2 months!",
    role: "Student, India",
    img: "https://www.shutterstock.com/image-photo/3d-render-closeup-image-tom-600w-2634283149.jpg",
  },
  {
    name: "Vedant Kasar",
    text: "The AI band score predictions were spot on. Highly recommend!",
    role: "Student, India",
    img: "https://i.pinimg.com/736x/f8/3d/b0/f83db01f1cd7075f004d914000dba049.jpg",
  },
  {
    name: "Vedant Kasar",
    text: "Amazing mentors and real-time practice. Felt confident on exam day.",
    role: "Student, India",
    img: "https://i.pinimg.com/564x/c7/dd/5b/c7dd5b8875e6b6bde55d599bb5a1767c.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h3>What Our Students Say</h3>
        <div className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <span className="quote">“</span>
              <p>{t.text}</p>
              <div className="student-info">
                <img src={t.img} alt={t.name} />
                <div>
                  <h5>{t.name}</h5>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
