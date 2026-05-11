window.onload = () => {
    if (window.location.pathname.endsWith("contact.html")) {
        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const topic = document.getElementById("topic").value;
            const message = document.getElementById("message").value.trim();
            const subject = `${topic} from ${name}`;
            const messageLabel = document.getElementById("message-label").innerText;

            let additionalDetails = "";
            if (topic === "Support" || topic === "Bug Report") {

                additionalDetails = `\r\nDevice: ${document.getElementById("device").value.trim()}\r\nOperating System: ${document.getElementById("os").value.trim()}\r\nApp Version: ${document.getElementById("app-version").value.trim()}`;
                if (topic === "Support") {
                    additionalDetails += `\r\nAction taken before issue: ${document.getElementById("support-action").value.trim()}\r\nExpected result: ${document.getElementById("support-expected").value.trim()}\r\nActual result: ${document.getElementById("support-actual").value.trim()}`;
                }
            }
            const body =`From: ${name}, ${email}\r\nTopic: ${topic}${additionalDetails}\r\n${messageLabel} ${message}`;
            const mailto = `mailto:support@greathallweb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
        });

        document.getElementById("topic").addEventListener("change", function () {
            const topic = this.value;
            document.getElementById("support").style.display = "none";
            document.getElementById("bug-or-support").style.display = "none";

            switch (topic) {
                case "Support":
                    document.getElementById("support").style.display = "block";
                    document.getElementById("bug-or-support").style.display = "block";
                    document.getElementById("message-label").innerHTML = "Additional details (optional):";
                    break;
                case "Bug Report":
                    document.getElementById("message-label").innerHTML = "Steps to reproduce:";
                    document.getElementById("bug-or-support").style.display = "block";
                    break;
                case "Feature Request":
                    document.getElementById("message-label").innerHTML = "Feature description:";
                case "Question":
                    document.getElementById("message-label").innerHTML = "Question:";
                    break;
                default:
                    document.getElementById("message-label").innerHTML = "Message:";
            }
        });
    }
}