const features = [
  {
    title: "Speaking Practice",
    desc: "Interactive sessions designed to improve fluency and confidence in real exam scenarios.",
    icon: "🎤",
  },
  {
    title: "Mock Tests",
    desc: "Take full-length mock tests with detailed performance analysis and instant feedback.",
    icon: "📝",
  },
  {
    title: "AI Band Score",
    desc: "Leverage AI technology to get precise IELTS band score predictions before your exam.",
    icon: "🤖",
  },
  {
    title: "Expert Mentors",
    desc: "Learn from certified IELTS trainers with years of proven teaching experience.",
    icon: "👨‍🏫",
  },
];

export default function Features() {
  return (
    <section className="features">
      <h3>
        Why Choose <span style={{ color: "#2563eb" }}>Our Institute?</span>
      </h3>
      <div className="feature-grid">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <div>{f.icon}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}