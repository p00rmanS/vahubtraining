/** Meetings, team onboarding, and clean handovers. Append IDs to preserve existing progress. */
const meetingsHandoverLessons = [
  {
    title: "Run meetings with agendas, minutes, and action tracking",
    goal: "Prepare a short agenda, take accurate minutes, and make sure every action item has an owner and a date.",
    prereq: "Calendar management, note-taking, and follow-up lessons.",
    teach:
      "Meetings waste time when nobody knows why they are happening or what was decided. A VA can make meetings useful before, during, and after. Before: confirm the purpose, the people who really need to attend, the time zone for each person, and the decision or outcome wanted. Write a short agenda with the topic, the owner of each topic, and the minutes allotted, and send it at least a day ahead along with any documents to read. During: if you are asked to take notes, record decisions, action items, deadlines, and open questions rather than every word. Write each action as a verb, an owner, and a date, such as 'Maria sends the revised quote by Friday'. If an owner or date is missing, ask before the meeting ends. Never record anything confidential beyond what the host wants minuted, and ask permission before recording audio or video, since rules differ by place. After: send the minutes within a day, with decisions first, then actions with owners and dates, then open questions and the next meeting date. Ask the host to review before sending if the content is sensitive. Put the actions into the task tool and set reminders so they do not depend on memory. Before the next meeting, check which actions are done, and put overdue items first on the agenda. Keep minutes factual and neutral; do not add your own opinions or blame. File them in one agreed folder with a consistent name such as the date and meeting title.",
    example:
      "A fictional bakery owner holds a weekly meeting with the baker and the delivery driver. The VA sends a 20-minute agenda the day before: weekend orders, oven repair, and holiday hours. In the meeting she records two decisions and four actions, and notices one action has no date, so she asks and gets 'Wednesday'. She sends the minutes the same afternoon, adds the actions to the task board with reminders, and puts the overdue oven quote first on the next agenda.",
    steps: [
      "Confirm purpose, attendees, time zones, and the outcome wanted.",
      "Send a short agenda with owners and time for each topic, plus documents, one day ahead.",
      "Record decisions, actions with owner and date, and open questions, not every word.",
      "Send neutral minutes within a day, decisions first, and add actions to the task tool.",
      "Review overdue actions before the next meeting and put them first on the agenda.",
    ],
    exercise:
      "Write an agenda for the practice meeting, take minutes from the practice transcript, and list actions with owners and dates.",
    portfolio:
      "A sample agenda, a set of minutes with actions, and a follow-up message.",
    mistake:
      "Recording actions without an owner or a date means nobody is responsible, and the item is usually forgotten.",
    question:
      "An action item says 'Look into oven repair' with no owner or date. What should you do?",
    options: [
      "Ask before the meeting ends for an owner and a date and record both",
      "Leave it as written",
      "Assign it to yourself",
    ],
    answer: 0,
    explanation:
      "An action needs a verb, an owner, and a date to be done. Ask while everyone is still in the room.",
    ready: [
      "Send an agenda with owners and times",
      "Record decisions and actions, not every word",
      "Send neutral minutes within a day",
      "Track actions and review overdue ones",
    ],
    tools: "A calendar, a notes document, the task board, and a shared folder.",
    taglish:
      "Nasasayang ang oras sa meeting kapag walang nakaaalam kung bakit ito ginagawa o ano ang napagpasyahan. Puwedeng gawing kapaki-pakinabang ng VA ang meeting bago, habang, at pagkatapos. Bago: kumpirmahin ang layunin, ang mga talagang kailangang dumalo, ang time zone ng bawat isa, at ang gustong resulta. Sumulat ng maikling agenda na may paksa, may-ari ng bawat paksa, at minuto, at ipadala nang hindi bababa sa isang araw bago kasama ang babasahin. Habang nagmi-meeting: itala ang mga desisyon, action item, deadline, at bukas na tanong, hindi ang bawat salita. Isulat ang bawat action bilang pandiwa, may-ari, at petsa, halimbawa 'Ipapadala ni Maria ang binagong quote sa Biyernes'. Kung kulang ang may-ari o petsa, magtanong bago matapos ang meeting. Huwag magtala ng kumpidensyal na higit sa gusto ng host, at magtanong muna bago mag-record ng audio o video dahil magkakaiba ang patakaran. Pagkatapos: ipadala ang minutes sa loob ng isang araw, desisyon muna, tapos action na may may-ari at petsa, bukas na tanong, at susunod na meeting. Ipa-review sa host kung sensitibo. Ilagay ang mga action sa task tool at magtakda ng paalala. Bago ang susunod na meeting, tingnan kung alin ang tapos at unahin sa agenda ang overdue. Panatilihing neutral at factual ang minutes, at i-file sa isang folder na may pare-parehong pangalan.",
    proTips: [
      "Start the minutes document before the meeting with the agenda headings in place. You only fill in, and nothing gets lost while you type.",
      "Read the actions aloud in the last two minutes. Corrections happen on the spot instead of in a long email chain.",
    ],
    deepDive: [
      [
        "Prepare so the meeting can be short",
        "Confirm the purpose and the outcome wanted, invite only the people who need to decide or act, and check every time zone. An agenda with owners and minutes per topic and the documents attached lets people come ready.",
      ],
      [
        "Capture decisions and actions",
        "Do not transcribe. Write what was decided, who will do what by when, and what remains open. Ask for a missing owner or date before people leave. Ask permission before any recording, since rules differ by place.",
      ],
      [
        "Follow up so actions happen",
        "Send neutral minutes within a day, decisions first. Put every action into the task tool with a reminder and review overdue ones at the start of the next meeting. Keep sensitive content to what the host wants minuted.",
      ],
    ],
    practiceData:
      "Fictional meeting transcript: owner, baker, and driver discuss weekend orders (40 cakes, driver needs a second helper Saturday), an oven that heats unevenly (the owner will get two repair quotes, no date given), and holiday hours (open until 4 PM on December 24, decided). Next meeting: next Monday 9 AM. Time zone: all in Manila.",
    modelAnswer:
      "Agenda: weekend orders (10 min, baker), oven repair (5 min, owner), holiday hours (5 min, owner), documents attached. Minutes: Decisions: open until 4 PM on December 24. Actions: driver to confirm a Saturday helper by Thursday (ask for date if missing); owner to get two oven repair quotes by an agreed date (ask the owner during the meeting; record, for example, Wednesday); VA to add actions to the board. Open questions: who is the Saturday helper. Next meeting Monday 9 AM Manila time. Send the minutes the same day and put overdue actions first next time.",
  },
  {
    title: "Onboard a new team member or contractor",
    goal: "Give a new person the access, information, and first-week plan they need without sharing more than necessary.",
    prereq: "Security basics, documentation, and password manager lessons.",
    teach:
      "A good start saves weeks of confusion. When a client hires someone new, a VA can prepare the onboarding so the person is productive quickly and safely. Begin with a written request from the client that names the person, their role, start date, the tools they need, and who approves. Apply least privilege: give access only to the tools and folders their role needs, and use the lowest permission level that works, such as view or edit instead of admin. Create accounts under the company's own email and ownership, not a personal account. Share credentials only through the password manager, never in chat or email, and require two-step verification on the accounts that support it. Prepare a welcome message that states who they report to, the working hours and time zone, the main channels, and what is expected in the first week. Build a first-week plan with a short list: read the key documents, meet two or three people, complete one small supervised task, and a check-in at the end of each day or week. Collect only the information actually needed from the new person, such as bank or tax details for payment, through the client's proper process and not by casual message. For contractors, make sure a signed agreement and any confidentiality agreement are in place before access is granted. Keep a checklist of everything granted, with dates, so access can be removed cleanly later. At the end of week one, ask what was unclear and fix the documents so the next person has an easier start.",
    example:
      "A fictional bakery hires a part-time contractor to manage social posts. After the owner's written request, the VA confirms the signed agreement, then creates a company-email account, shares the content folder with edit rights, and adds the person to the scheduling tool as editor, not admin. The login goes through the password manager with two-step verification. The welcome message lists hours, channels, and a five-day plan, and the VA records every access with the date. On Friday the contractor says the brand guide was hard to find, so the VA moves it to the top of the folder.",
    steps: [
      "Get a written request naming the person, role, start date, tools, and approver.",
      "Confirm the signed agreements before granting any access.",
      "Create company-owned accounts with least privilege, the password manager, and two-step verification.",
      "Send a welcome message and a first-week plan with check-ins.",
      "Record all access granted with dates, and improve the documents after week one.",
    ],
    exercise:
      "Write the onboarding checklist for the practice hire, the least-privilege access list, the welcome message, and the first-week plan.",
    portfolio:
      "An onboarding checklist, an access log, and a welcome message with a first-week plan.",
    mistake:
      "Giving a new person admin access to everything 'to save time' creates risk that is hard to notice and harder to undo.",
    question:
      "A contractor starts today. The client says to share the team's main login in chat. What should you do?",
    options: [
      "Create their own account with least privilege and share any credential only through the password manager",
      "Paste the shared login in chat",
      "Give them admin so they are not blocked",
    ],
    answer: 0,
    explanation:
      "Individual accounts with the lowest needed access, delivered through a password manager, protect the business and make access easy to remove later.",
    ready: [
      "Get the request and agreements in writing",
      "Grant least privilege on company-owned accounts",
      "Use the password manager and two-step verification",
      "Record access and improve the process after week one",
    ],
    tools:
      "The password manager, a checklist, the client's tools, and a shared folder.",
    taglish:
      "Ang maayos na simula ay nakakatipid ng ilang linggong pagkalito. Kapag may bagong tao ang client, puwedeng ihanda ng VA ang onboarding para mabilis at ligtas silang makapagtrabaho. Magsimula sa nakasulat na hiling ng client na may pangalan, role, start date, mga tool, at nag-aaprub. Ilapat ang least privilege: ibigay lang ang access na kailangan ng role, at gamitin ang pinakamababang antas na gumagana, tulad ng view o edit sa halip na admin. Gumawa ng account gamit ang email at pagmamay-ari ng kumpanya, hindi personal. Ibahagi ang credentials sa password manager lang, hindi sa chat o email, at hilingin ang two-step verification. Maghanda ng welcome message na nagsasabi kung sino ang pinag-uulatan, oras ng trabaho, time zone, mga channel, at inaasahan sa unang linggo. Gumawa ng first-week plan: basahin ang mahahalagang dokumento, makilala ang dalawa o tatlong tao, gumawa ng isang maliit na supervised task, at mag-check-in. Kolektahin lang ang impormasyong kailangan sa tamang proseso ng client, hindi sa casual na mensahe. Para sa contractor, tiyaking may pirmadong kasunduan at confidentiality agreement bago ang access. Magtago ng checklist ng lahat ng ibinigay na may petsa para malinis itong maalis mamaya. Sa katapusan ng unang linggo, itanong kung ano ang hindi malinaw at ayusin ang mga dokumento para mas madali ang susunod na tao.",
    proTips: [
      "Give the new person one 'start here' page with ten links, no more. Ten links get read; fifty get ignored.",
      "Schedule the access review for day 30 when you grant access. Unused permissions are easiest to remove while the memory is fresh.",
    ],
    deepDive: [
      [
        "Written request first",
        "Start from the client's written request naming the person, role, start date, tools, and approver. For contractors, confirm the signed agreement and confidentiality terms first. Without these, do not grant access, however friendly the request feels.",
      ],
      [
        "Least privilege, company-owned",
        "Create accounts under the company's ownership and give only the access the role needs, at the lowest permission level that works. Deliver credentials through the password manager and require two-step verification where it exists.",
      ],
      [
        "A first week that works",
        "Send a welcome message with reporting line, hours, channels, and expectations. Give a short plan with one small supervised task and regular check-ins. Log every access with dates, then ask what was confusing and fix the documents.",
      ],
    ],
    practiceData:
      "Fictional hire: Ana, part-time contractor for social posts, starts Monday, reports to the owner, works 9 AM to 1 PM Manila time. Needs: content folder, scheduling tool, brand guide. Does not need: bookkeeping, customer list, bank access. Signed agreement is on file; the confidentiality agreement is not yet signed.",
    modelAnswer:
      "Hold access until the confidentiality agreement is signed, then proceed. Accounts: company email; content folder as editor; scheduling tool as editor; brand guide as viewer. No bookkeeping, customer list, or bank access. Deliver the login through the password manager with two-step verification. Welcome message: reports to the owner, 9 AM to 1 PM Manila time, channels, expectations. First week: read the brand guide, meet the owner and baker, draft one supervised post, end-of-day check-in. Log each access with its date and set a day-30 access review.",
  },
  {
    title: "Hand over work and offboard cleanly",
    goal: "Transfer tasks, documents, and access cleanly when someone leaves or a project ends, without losing work or leaving doors open.",
    prereq: "SOP, password manager, and documentation lessons.",
    teach:
      "People leave, projects end, and contracts finish. A clean handover protects the client's business and your reputation. Start with notice: confirm the end date in writing and agree what must be finished, what will be transferred, and who takes over each item. Make a handover list of recurring tasks with when they happen, where the instructions are, who the contacts are, and what is currently in progress or waiting. Use existing SOPs and update them; if none exist, write short ones for the most important tasks. Record where files, accounts, subscriptions, and logins live, and make sure everything important is in the client's own accounts and not personal ones. Transfer ownership of documents and shared folders before the person leaves, because files owned by a departing account can become inaccessible. Do not export or keep copies of client data for yourself; confirm what you must return or delete under the agreement, and do so. On the last day, remove access in one planned sequence: change shared passwords that the person knew, remove them from tools and groups, sign them out of devices, and remove them from mailing lists and calendars, then check each one off. Set up forwarding or an automatic reply for a short time, with the client's approval, so messages are not lost. Hold a short handover call, write the summary afterward, and send a final message that lists what was transferred and what was removed. Keep the log, and ask the client if they want a feedback conversation. A tidy ending often leads to referrals and return work.",
    example:
      "A fictional bakery's part-time assistant is leaving at month end. The VA writes a handover list of 12 recurring tasks, updates three SOPs, and moves the shared order sheet to the owner's account. On the last day she changes the two shared passwords the assistant knew, removes them from the scheduling tool and email groups, signs out their devices, and sets a two-week automatic reply approved by the owner. After a 30-minute handover call, she sends a summary of what was transferred and removed, and files the checklist.",
    steps: [
      "Confirm the end date in writing and agree what is finished, transferred, or deleted.",
      "Write a handover list of recurring tasks, contacts, and work in progress, and update SOPs.",
      "Transfer ownership of files and accounts to the client before the last day.",
      "Remove access in one planned sequence and change any shared passwords the person knew.",
      "Hold a handover call, send a written summary, and file the checklist.",
    ],
    exercise:
      "Write a handover list for the practice assistant, an access-removal checklist, and the final summary message.",
    portfolio:
      "A handover list, an offboarding checklist, and a final summary message.",
    mistake:
      "Forgetting to remove access or change shared passwords leaves a former team member with open doors to the client's accounts.",
    question:
      "A departing assistant owns the shared order sheet in a personal account. What should you do before they leave?",
    options: [
      "Transfer ownership to the client's account and confirm everyone still has access",
      "Wait and see if the sheet still works afterward",
      "Make a private copy for yourself",
    ],
    answer: 0,
    explanation:
      "Files owned by a departing account can become inaccessible. Move ownership to the client first, and never keep private copies.",
    ready: [
      "Agree the end date and what transfers in writing",
      "Document recurring tasks and update SOPs",
      "Move ownership of files and accounts to the client",
      "Remove access in one checklist and send a summary",
    ],
    tools:
      "A checklist, SOP documents, the password manager, and the client's admin consoles.",
    taglish:
      "Umaalis ang mga tao, natatapos ang proyekto, at nagtatapos ang kontrata. Ang maayos na handover ay nagpoprotekta sa negosyo ng client at sa reputasyon mo. Magsimula sa abiso: kumpirmahin nang nakasulat ang petsa ng pagtatapos at ang mga tatapusin, ililipat, at kung sino ang hahalili sa bawat isa. Gumawa ng handover list ng mga paulit-ulit na gawain na may kailan nangyayari, saan ang instruksyon, sino ang mga contact, at ano ang kasalukuyang ginagawa o hinihintay. Gamitin at i-update ang mga SOP; kung wala, sumulat ng maikli para sa pinakamahalagang gawain. Itala kung saan nakalagay ang mga file, account, subscription, at login, at tiyaking nasa account ng client at hindi personal. Ilipat ang pagmamay-ari ng mga dokumento at shared folder bago umalis ang tao, dahil puwedeng hindi na ma-access ang file ng umalis na account. Huwag mag-export o magtago ng kopya ng client data para sa sarili; kumpirmahin ang dapat ibalik o burahin ayon sa kasunduan at gawin ito. Sa huling araw, tanggalin ang access sa isang planadong pagkakasunod: palitan ang shared password na alam ng tao, alisin sa mga tool at grupo, i-sign out sa mga device, at alisin sa mailing list at calendar, at i-check ang bawat isa. Mag-set ng forwarding o automatic reply sa maikling panahon, kasama ang pahintulot ng client. Magdaos ng maikling handover call, sumulat ng buod, at magpadala ng huling mensaheng naglilista ng inilipat at inalis. Itago ang log at tanungin kung gusto ng client ng feedback conversation. Ang maayos na pagtatapos ay madalas humahantong sa referral at pagbabalik.",
    proTips: [
      "Change shared passwords the moment the person's last shift ends, not at the end of the week. The gap is when mistakes happen.",
      "Write the handover for a stranger. If someone who has never met the team could do the task from your notes, the notes are good.",
    ],
    deepDive: [
      [
        "Agree what moves and what ends",
        "Confirm the last day in writing along with what is finished, transferred, or deleted. List recurring tasks with timing, instructions, contacts, and current status, and update the SOPs so the next person is not guessing.",
      ],
      [
        "Ownership before departure",
        "Move documents, folders, and accounts to the client's ownership while the person is still reachable. Files held by a departing account can lock people out. Do not keep personal copies of client data, and follow the agreement on returning or deleting it.",
      ],
      [
        "Close the doors in order",
        "On the last day, change shared passwords the person knew, remove them from tools and groups, sign out devices, and clear lists and calendars, ticking each item. Set an approved forwarding or auto-reply, hold a handover call, and send a written summary.",
      ],
    ],
    practiceData:
      "Fictional departure: the bakery's part-time assistant leaves on the 30th. Recurring tasks: Monday order check, Wednesday supplier email, Friday inventory count. Accounts: scheduling tool (editor), shared email inbox (member), two shared passwords known to them. The order sheet is owned by the assistant's personal account. The agreement requires deleting any client files on personal devices.",
    modelAnswer:
      "Handover list: Monday order check, Wednesday supplier email, Friday inventory count, each with timing, instructions, contacts, and current status; update the three SOPs. Transfer the order sheet to the owner's account and confirm access. On the 30th: change both shared passwords, remove the assistant from the scheduling tool and inbox, sign out devices, and clear lists and calendars. Get the owner's approval for a two-week auto-reply. Confirm in writing that client files on personal devices were deleted. Hold a handover call, then send a summary of what was transferred and removed and file the checklist.",
  },
];

const meetingsHandoverModuleIndex = modules.length;
modules.push([
  "Meetings, onboarding, and handovers",
  "Run useful meetings, onboard new people safely, and hand work over cleanly.",
  "Advanced workflow",
  meetingsHandoverLessons,
]);
meetingsHandoverLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${meetingsHandoverModuleIndex}-${index}`,
    mi: meetingsHandoverModuleIndex,
    li: index,
  });
});
