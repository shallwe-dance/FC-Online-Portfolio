const modal = document.getElementById("player-modal");
const actions = document.getElementById("modal-actions");

document.querySelectorAll(".player").forEach(player => {
    player.addEventListener("click", () => {
        modal.classList.remove("hidden");

        // 기본 정보
        document.getElementById("modal-name").textContent = player.dataset.name;
        document.getElementById("modal-pos").textContent = player.dataset.pos;
        document.getElementById("modal-num").textContent = player.dataset.num;
        document.getElementById("modal-desc").innerHTML = player.dataset.desc;

        // 포지션 색상
        const posEl = document.getElementById("modal-pos");
        posEl.className = "pos " + player.dataset.pos.toLowerCase();

        // 태그
        const tagWrap = document.querySelector(".fc-tags");
        tagWrap.innerHTML = "";
        player.dataset.tags.split(",").forEach(tag => {
            const li = document.createElement("li");
            li.textContent = tag.trim();
            tagWrap.appendChild(li);
        });

        // 버튼 렌더링
        actions.innerHTML = "";

        // 메인 버튼
        const mainBtn = document.createElement("a");
        mainBtn.href = player.dataset.linkMain;
        mainBtn.target = "_blank";
        mainBtn.className = "fc-btn";
        mainBtn.textContent = "자세히 보기";
        actions.appendChild(mainBtn);

        // 서브 버튼 (있을 때만)
        if (player.dataset.linkSub) {
            const subBtn = document.createElement("a");
            subBtn.href = player.dataset.linkSub;
            subBtn.target = "_blank";
            subBtn.className = "fc-btn";
            subBtn.textContent = player.dataset.linkSubLabel || "추가 자료";
            actions.appendChild(subBtn);
        }
    });
});

// 닫기
document.querySelector(".fc-close").onclick = closeModal;
document.querySelector(".modal-overlay").onclick = closeModal;

function closeModal() {
    modal.classList.add("hidden");
}

//로드될 때 안내
window.addEventListener("load", () => {
    const toast = document.getElementById("guide-toast");
    const confirmBtn = document.getElementById("guide-confirm");

    toast.classList.remove("hidden");

    confirmBtn.addEventListener("click", () => {
        toast.classList.add("hidden");
        localStorage.setItem("guideShown", "true");
    });
});

