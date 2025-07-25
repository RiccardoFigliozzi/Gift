document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // --- PASSO 1: IL CUORE DEL REGALO - I TUOI DATI ---
    // Sostituisci questi dati di esempio con i vostri veri momenti.
    // 'author': usa 'me' per te e 'desiree' per lei.
    // 'side': alterna 'left' e 'right' per l'effetto zig-zag.
    // =================================================================

    const milestones = [
        {
            id: 1,
            date: "27 Aprile 2024",
            title: "Il primo 'Ciao'",
            side: "left",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Riccaaaaa Te vieni, giusto?" },
                { type: "text", author: "Riccardo", text: "Si certo 👻" },
                { type: "text", author: "Riccardo", text: "Sto uscendo ora, 20 minuti e sono da Aurora." },
                { type: "text", author: "Desi HipHop", text: "Okkk" },
            ]
        },
        {
            id: 2,
            date: "16 Giugno 2024",
            title: "La proposta per la prima uscita",
            side: "right",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Ahem, io ho ancora il tuo ombrellino...👀" },
                { type: "text", author: "Riccardo", text: "Era troppo scontato che succedesse ahah" },
                { type: "text", author: "Desi HipHop", text: "Te hai da fare oggi? \n Pk volendo potremmo trovarci da qualche parte, così ti restituisco l'ombrello, sennò ti tocca aspettare fino a martedì per riaverlo, lol \n Decidi te" },
                { type: "text", author: "Riccardo", text: "Va bien, facciamo per le 18?" },
                { type: "text", author: "Desi HipHop", text: "👍🏻" },
                { type: "text", author: "Desi HipHop", text: "Dove però? Lol" },
                { type: "text", author: "Riccardo", text: "Porta al prato?" },
                { type: "text", author: "Desi HipHop", text: "Intendi la fermata del bus?" },
                { type: "text", author: "Riccardo", text: "No intendevo proprio la porta ahah" },
                { type: "text", author: "Riccardo", text: "Comunque dimmi te dove ti viene più comodo" },
                { type: "text", author: "Desi HipHop", text: "Ah no aspe, mi sono confusa con un'altra fermata, lol" },
                { type: "text", author: "Desi HipHop", text: 'Hmmm.... e se invece ci trovassimo alla fermata del bus dove eri sceso te? Intendo "Carra Scarlatti"' },
                { type: "text", author: "Riccardo", text: "Va benissimo 👍👍" },
                { type: "text", author: "Desi HipHop", text: "Okkie" },
                { type: "text", author: "Riccardo", text: "Comunque con sto caldo mi sta venendo voglia di gelato, vuoi farmi compagnia 😬 ?" },
                { type: "text", author: "Desi HipHop", text: "Volentieriiiiiiii" },
                { type: "text", author: "Desi HipHop", text: "Te lo volevo chiedere anche io hehehe" },
                { type: "text", author: "Riccardo", text: "Ahahah lo sapevo che avresti accettato" },
                { type: "text", author: "Desi HipHop", text: ":P" },
            ]
        },
        {
            id: 3,
            date: "26 Giugno 2024",
            title: "Al cinema",
            side: "left",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Ricca a che punto sei?" },
                { type: "text", author: "Desi HipHop", text: "Dove sei????????????????????????????????????????????????????????????????????????????????????????" },
                { type: "text", author: "Riccardo", text: "Accanto a te ;)" },
            ]
        },
        {
            id: 4,
            date: "12 Luglio 2024",
            title: "Quella famosa volta al parco...",
            side: "right",
            chatSnippet: [
                { type: "text", author: "Riccardo", text: "Quanto era molesto quel vecchietto madonna ahahaha" },
                { type: "text", author: "Desi HipHop", text: "Mi dispiace ancora per come è andata a finire l'altra sera... davvero. Forse avrei dovuto dirti le cose in modo diverso... anche se mi fossi piaciuto in senso romantico, credo che te lo avrei detto ma non penso che sarebbe andata molto lontano pk, come ti avevo detto l'altra sera, non mi sento ancora proprio emotivamente stabile pk ho tanto cose in questo momento che mi frullano nella testa. Inoltre, anche se sono da mia nonna, il pensiero dei miei e di quello che mi hanno detto le settimane scorse mi hanno ferita abbastanza e anche la mia autostima ne ha risentito un pò...😂" },
                { type: "text", author: "Desi HipHop", text: "Se non ti rispondo subito è pk sto uscendo con mio fratello a bere una cosuccia... 👀 \n Magari ci possiamo sentire per la buona notte :)" },
                { type: "text", author: "Riccardo", text: "Non ti devi scusare di nulla anzi può sembrarti strano ma ho apprezzato molto il fatto che tu abbia riflettuto su quello che volevi dirmi esattamente, capisco la situazione purtroppo e so che non è facile da affrontare, anche per questo ho voluto parlarti e farti sapere cosa provo e come mi sento, anche solo per farti sapere che qualcuno che ci tiene a te esiste" }
            ]
        },
        {
            id: 5,
            date: "6 Settembre 2024",
            title: "Il primo mese",
            side: "left",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Oh Madonna \n Chi li aveva visti tutti sti sticker? 👀❤️" },
                { type: "text", author: "Desi HipHop", text: "Cmq BUONGIORNO🥰" },
                { type: "text", author: "Riccardo", text: "Buongiornoooooooooooo ♥️♥️♥️" },
                { type: "text", author: "Riccardo", text: "Contali ;)" },
                { type: "text", author: "Desi HipHop", text: "30 😘" },
                { type: "text", author: "Desi HipHop", text: "Buon mesiversario🫶🏻" },
            ]
        },
        {
            id: 6,
            date: "11 Settembre 2024",
            title: "I put you first",
            side: "right",
            chatSnippet: [
                { type: "text", author: "Riccardo", text: "Can I call you baby? Can you be my friend?" },
                { type: "text", author: "Desi HipHop", text: "Can you be my lover up until the very end? 🥺" },
                { type: "text", author: "Riccardo", text: "Let me show your loooooooooove oh no pretend" },
                { type: "text", author: "Riccardo", text: "Stick by my side until the world is caving in" },
                { type: "text", author: "Desi HipHop", text: "Oooh don't you worry, I'll be there whenever you want me 🫂" },
                { type: "text", author: "Riccardo", text: "I need somebody who can love me at my worst" },
                { type: "text", author: "Desi HipHop", text: "Know I'm not perfect but I hope you see my worth 🥺" },
                { type: "text", author: "Riccardo", text: "It's only you nobody new I put you fiiirst" },
                { type: "text", author: "Riccardo", text: "And for you girl I swear I'd do the worst" },
                { type: "text", author: "Desi HipHop", text: "And for you boy I swear I'd do the worst 🫢🫶🏻" },
            ]
        },
        {
            id: 7,
            date: "12 Ottobre 2024",
            title: "Quella Volta che...",
            side: "left",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Grazie davvero ancora per non esserti arreso e per averci riprovato con me❤️" },
                { type: "text", author: "Riccardo", text: "Grazie ti amo tanto ♥️" },
                { type: "text", author: "Desi HipHop", text: "Anche io amore mio❤️" },
                { type: "text", author: "Desi HipHop", text: "Mi sento la ragazza più fortunata del mondo quando sto con te❤️" },
                { type: "text", author: "Riccardo", text: "Io mi sento davvero tanto tanto bene quando sto con te ♥️" },
                { type: "text", author: "Riccardo", text: "Credo non esista un termine per descrivere quello che sento quando sto vicino a te" }
            ]
        },
        {
            id: 8,
            date: "28 Ottobre 2024",
            title: "Sei tutto per me",
            side: "right",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: 'Quella volta che sono dovuta ritornare a casa di corsa e te mi hai detto tantissime belle parole mentre io ero in camera a piangere... soprattutto quando mi hai detto per la prima volta "ti amo"' },
                { type: "text", author: "Riccardo", text: "Lo farei ancora ed ancora" },
                { type: "text", author: "Riccardo", text: "Sei tutto per me " },
            ]
        },
        {
            id: 9,
            date: "31 Ottobre 2024",
            title: "Halloween 🎃",
            side: "left",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/halloween.jpeg" },
            ]
        },
        {
            id: 10,
            date: "6 Novembre 2024",
            title: "Al museo",
            side: "right",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/museo.jpeg" },
            ]
        },
        {
            id: 11,
            date: "1 Gennaio 2025",
            title: "Buon annoooooo 🍾🥳🎉",
            side: "left",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/capodanno.jpeg" },
            ]
        },
        {
            id: 12,
            date: "6 Gennaio 2025",
            title: "La decisione più difficile della tua vita",
            side: "right",
            chatSnippet: [
                { type: "text", author: "Riccardo", text: "Sono a casa 😘" },
                { type: "text", author: "Riccardo", text: "Amo tutto bene?" },
                { type: "text", author: "Desi HipHop", text: "Sì sì" },
                { type: "text", author: "Desi HipHop", text: "Domani me ne vado" },
                { type: "text", author: "Riccardo", text: "Bene 🫶" },
            ]
        },
        {
            id: 13,
            date: "1 Aprile 2025",
            title: "Le voglie di Desi",
            side: "left",
            chatSnippet: [
                { type: "text", author: "Desi HipHop", text: "Amore ti va se per oggi a pranzo facciamo la carbonara? È un pò che non la rimangiamo e a me piace tanto come la fai te 🥺" },
                { type: "text", author: "Riccardo", text: "Certo amore mio ❤️" },
            ]
        },
        {
            id: 14,
            date: "22 Giugno 2025",
            title: "Uscita a 3",
            side: "right",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/tramonto.jpeg" },
            ]
        },
        {
            id: 15,
            date: "26 Giugno 2025",
            title: "L'urlo 😱",
            side: "left",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/saggio.jpeg" },
            ]
        },
        {
            id: 16,
            date: "4 Luglio 2025",
            title: "U' Panzerott'",
            side: "right",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/bari.jpeg" },
            ]
        },
        {
            id: 17,
            date: "18 Luglio 2025",
            title: "Il TG Poste",
            side: "left",
            chatSnippet: [
                { type: "image", author: "Riccardo", url: "assets/milano.jpeg" },
            ]
        },


    ];

    // --- Logica per generare la timeline e gestire l'interattività ---
    const timelineContainer = document.getElementById('timeline-container');
    const modal = document.getElementById('chat-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalChatContent = document.getElementById('modal-chat-content');
    const closeButton = document.querySelector('.close-button');

    // Funzione per creare dinamicamente la timeline
    function buildTimeline() {
        milestones.forEach(milestone => {
            const milestoneElement = document.createElement('div');
            milestoneElement.className = `milestone ${milestone.side}`;

            milestoneElement.innerHTML = `
                        <div class="milestone-content" data-id="${milestone.id}">
                            <h2>${milestone.title}</h2>
                            <span class="milestone-date">${milestone.date}</span>
                        </div>
                    `;
            timelineContainer.appendChild(milestoneElement);
        });
    }

    // Funzione per aprire il modale con la chat corretta
    function openModal(milestoneId) {
        const milestone = milestones.find(m => m.id == milestoneId);
        if (!milestone) return;

        modalTitle.innerText = milestone.title;
        modalChatContent.innerHTML = ''; // Pulisce la chat precedente

        milestone.chatSnippet.forEach(message => {
            const bubble = document.createElement('div');
            bubble.className = `message-bubble ${message.author}`;
            const type = message.type || 'text';

            switch (type) {
                case 'image':
                    bubble.classList.add('media-bubble');
                    bubble.innerHTML = `<img src="${message.url}" alt="Immagine dalla chat" class="chat-media">`;
                    break;
                case 'video':
                    bubble.classList.add('media-bubble');
                    bubble.innerHTML = `<video src="${message.url}" controls class="chat-media"></video>`;
                    break;
                case 'text':
                default:
                    bubble.innerText = message.text;
                    break;
            }
            modalChatContent.appendChild(bubble);
        });

        modal.style.display = 'block';
    }

    // Funzione per chiudere il modale
    function closeModal() {
        modal.style.display = 'none';
    }

    // Aggiunge gli event listener
    timelineContainer.addEventListener('click', (event) => {
        const content = event.target.closest('.milestone-content');
        if (content) {
            const id = content.getAttribute('data-id');
            openModal(id);
        }
    });

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });



    // Avvia la costruzione della timeline
    buildTimeline();
});