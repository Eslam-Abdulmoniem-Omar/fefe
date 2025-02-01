document.addEventListener("DOMContentLoaded", () => {
  const cloneWebsiteBtn = document.getElementById("cloneWebsite")
  const previewHTMLBtn = document.getElementById("previewHTML")
  const previewCSSBtn = document.getElementById("previewCSS")

  cloneWebsiteBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "cloneWebsite" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError)
        } else if (response && response.success) {
          alert("Website cloned successfully!")
        } else {
          alert("Failed to clone website. Please try again.")
        }
      })
    })
  })

  previewHTMLBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "previewHTML" })
    })
  })

  previewCSSBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "previewCSS" })
    })
  })
})

