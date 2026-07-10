document.addEventListener("DOMContentLoaded", () => {
    // Basic View Layer Layout Selectors
    const cards = document.querySelectorAll(".module-card");
    const closeButtons = document.querySelectorAll(".close-modal-btn");
    const wrappers = document.querySelectorAll(".modal-wrapper");

    // ================== CORE ROUTING PANEL HANDLERS ==================
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const targetId = card.getAttribute("data-target");
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add("active-modal");
                document.body.style.overflow = "hidden";
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            wrappers.forEach(w => w.classList.remove("active-modal"));
            document.body.style.overflow = "auto";
        });
    });

    // ================== MODULE 01: REAL INTERACTIVE LIVE CHAT ==================
    const liveChatInputField = document.getElementById("liveChatInputField");
    const liveChatSendButton = document.getElementById("liveChatSendButton");
    const liveChatViewport = document.getElementById("liveChatViewport");

    function runChatSimulation() {
        const queryText = liveChatInputField.value.trim();
        if(!queryText) return;

        const userMsg = document.createElement("div");
        userMsg.className = "chat-line user";
        userMsg.innerText = queryText;
        liveChatViewport.appendChild(userMsg);
        liveChatInputField.value = "";
        liveChatViewport.scrollTop = liveChatViewport.scrollHeight;

        setTimeout(() => {
            const botMsg = document.createElement("div");
            botMsg.className = "chat-line bot";
            
            let matchText = queryText.toLowerCase();
            if(matchText.includes("hi") || matchText.includes("hello")) {
                botMsg.innerText = "Hello! Welcome to the DIU AI Assistant. How can I facilitate your sandbox operations today?";
            } else {
                botMsg.innerText = "Sorry, local vector pipelines are currently uncoupled in this MVP mock cluster stage.";
            }
            liveChatViewport.appendChild(botMsg);
            liveChatViewport.scrollTop = liveChatViewport.scrollHeight;
        }, 600);
    }
    if(liveChatSendButton) {
        liveChatSendButton.addEventListener("click", runChatSimulation);
        liveChatInputField.addEventListener("keypress", (e) => { if(e.key === 'Enter') runChatSimulation(); });
    }

    // ================== MODULE 02: DYNAMIC ROUTE CALCULATOR NAVIGATOR ==================
    const btnSearchMap = document.getElementById("btnSearchMap");
    const mapSearchInputField = document.getElementById("mapSearchInputField");
    const mapInputPane = document.getElementById("mapInputPane");
    const mapActivePane = document.getElementById("mapActivePane");
    const mapTargetTitle = document.getElementById("mapTargetTitle");
    const btnResetMapNav = document.getElementById("btnResetMapNav");

    if(btnSearchMap) {
        btnSearchMap.addEventListener("click", () => {
            const val = mapSearchInputField.value.trim();
            if(!val) return;

            // Map values directly to visual template HUD nodes dynamically
            mapTargetTitle.innerText = val;
            mapInputPane.classList.add("hidden");
            mapActivePane.classList.remove("hidden");
        });
    }
    if(btnResetMapNav) {
        btnResetMapNav.addEventListener("click", () => {
            mapSearchInputField.value = "";
            mapActivePane.classList.add("hidden");
            mapInputPane.classList.remove("hidden");
        });
    }

    // ================== MODULE 03: LIVE NOTICE PARSER ==================
    const btnExecuteNoticeAI = document.getElementById("btnExecuteNoticeAI");
    const noticeInputText = document.getElementById("noticeInputText");
    const noticeOutputBox = document.getElementById("noticeOutputBox");

    if(btnExecuteNoticeAI) {
        btnExecuteNoticeAI.addEventListener("click", () => {
            const rawTxt = noticeInputText.value.trim();
            noticeOutputBox.innerHTML = `<p style="color:#ffdd67; font-size:0.75rem; text-align:center; margin-top:20px;"><i class="fa-solid fa-spinner fa-spin"></i> Indexing Text Elements...</p>`;
            
            setTimeout(() => {
                noticeOutputBox.innerHTML = `
                    <ul class="summary-bullets-mock">
                        <li><span>•</span> <strong>Extracted Subject:</strong> Mid-term Examination Routine Mapping.</li>
                        <li><span>•</span> <strong>Condition Rules:</strong> Department tracks must confirm routines.</li>
                        <li><span>•</span> <strong>Timeline Target:</strong> Venues require audit <strong>3 days prior</strong>.</li>
                    </ul>
                `;
            }, 700);
        });
    }

    // ================== MODULE 04: QUEUE GENERATOR ==================
    const btnGenerateToken = document.getElementById("btnGenerateToken");
    const queueTokenText = document.getElementById("queueTokenText");
    const queueTimeText = document.getElementById("queueTimeText");

    if(btnGenerateToken) {
        btnGenerateToken.addEventListener("click", () => {
            queueTokenText.innerText = "A-24";
            queueTimeText.innerHTML = "Estimated Waiting Latency: <span style='color:#10b981; font-weight:700;'>Called to Counter 02!</span>";
        });
    }

    // ================== MODULE 05: COLLABORATION SEARCH ROSTER ==================
    const btnSearchCollab = document.getElementById("btnSearchCollab");
    const collabSearchInput = document.getElementById("collabSearchInput");
    const collabResultPane = document.getElementById("collabResultPane");
    const btnConnectAlert = document.getElementById("btnConnectAlert");

    if(btnSearchCollab) {
        btnSearchCollab.addEventListener("click", () => {
            if(!collabSearchInput.value.trim()) return;
            collabResultPane.classList.remove("hidden");
        });
    }
    if(btnConnectAlert) {
        btnConnectAlert.addEventListener("click", () => {
            alert("AI Match Connection Request Transmitted Successfully!");
        });
    }

    // ================== MODULE 06: INTERACTIVE KNOWLEDGE QUIZ MCQS ==================
    const quizOptions = document.querySelectorAll(".quiz-opt-btn");
    const quizFeedbackBox = document.getElementById("quizFeedbackBox");

    quizOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            // Reset previous choices indicators safely
            quizOptions.forEach(o => { o.classList.remove("correct-select", "wrong-select"); });
            
            const isCorrect = opt.getAttribute("data-correct") === "true";
            if(isCorrect) {
                opt.classList.add("correct-select");
                quizFeedbackBox.classList.remove("hidden");
                quizFeedbackBox.innerHTML = "<strong>System Verification:</strong> Correct Option! O(log n) maps binary segment runtimes.";
            } else {
                opt.classList.add("wrong-select");
                quizFeedbackBox.classList.add("hidden");
            }
        });
    });

    // ================== MODULE 07: CHIPS DYNAMIC FILTER OZONEFinder ==================
    const chips = document.querySelectorAll(".chip-act");
    const oppCards = document.querySelectorAll(".opp-item-card-hud");

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");

            const filterType = chip.getAttribute("data-filter");
            oppCards.forEach(card => {
                if(filterType === "all" || card.getAttribute("data-cat") === filterType) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // ================== MODULE 08: LIVE CAMPUS PULSE COMPILES ==================
    const btnCompilePulse = document.getElementById("btnCompilePulse");
    const pulseDataArea = document.getElementById("pulseDataArea");

    if(btnCompilePulse) {
        btnCompilePulse.addEventListener("click", () => {
            pulseDataArea.classList.remove("hidden");
            btnCompilePulse.innerText = "Aggregation Graph Synced Successfully";
        });
    }
});