
    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", () => {
      if (themeIcon.textContent === "🌞") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "🌝";
      } else {
        document.body.classList.remove("dark-mode");
        themeIcon.textContent = "🌞";
      }
    });

    // Search & Filter Projects
    document.getElementById("project-search").addEventListener("keyup", function() {
      let filter = this.value.toLowerCase();
      document.querySelectorAll(".project-card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(filter) ? "" : "none";
      });
    });

    // Skill badge filter
    document.querySelectorAll(".skill-badge").forEach(badge => {
      badge.addEventListener("click", () => {
        let skill = badge.dataset.skill;
        alert("Showing projects related to: " + skill.toUpperCase());
      });
    });

    // ✅ Resume PDF Generator
    document.getElementById("resume-btn").addEventListener("click", () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text("Sakthi Priya B", 20, 20);

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text("📞 +91 6379800595   |   ✉️ sathyageethab@gmail.com", 20, 30);
      doc.text("🔗 github.com/MohammedYaseen55", 20, 38);

      // Line
      doc.setLineWidth(0.5);
      doc.line(20, 42, 190, 42);

      // About
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("About Me", 20, 55);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Creative Youtuber & Influencer with 1 year of experience in the movie field.", 20, 63);
      doc.text("Skilled in photo editing, video editing, and digital storytelling.", 20, 70);

      // Education
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Education", 20, 85);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("• B.Sc. Computer Science – Govt. Arts & Science College, Avinashi (2024–2027)", 20, 93);
      doc.text("• HSLC (CS-Maths) – St. Joseph Girls Hr. Sec. School, Somanur (2021–2023)", 20, 100);
      doc.text("• SSLC – St. Joseph Girls Hr. Sec. School, Somanur (2008–2020)", 20, 107);

      // Skills
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Skills", 20, 122);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("HTML, CSS, JavaScript, UI/UX Design, Photo Editing, Video Editing", 20, 130);

      // Projects
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Projects", 20, 145);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("• Creative Portfolio – Responsive website built with HTML, CSS, JS", 20, 153);
      doc.text("• Web App – Full-stack app with authentication & cloud hosting", 20, 160);

      // Certificates
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Certificates", 20, 175);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("• IBM SkillsBuild Certificate (2025)", 20, 183);
      doc.text("• MongoDB Basics for Students (2025)", 20, 190);

      // Footer
      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.text("Generated from Portfolio Website © 2025 ComicCast", 20, 210);

      // Save PDF
      doc.save("SakthiPriya_Resume.pdf");
    });
