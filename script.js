// Add smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    // Add click event to download button
    const downloadButton = document.querySelector(".download-button")
    if (downloadButton) {
      downloadButton.addEventListener("click", () => {
        // You would typically redirect to a download URL or trigger a download
        alert("Download started! Thank you for choosing Eternal.")
      })
    }
  
    // Add hover effects for cards
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)"
        this.style.transition = "transform 0.3s ease"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  })
  
  