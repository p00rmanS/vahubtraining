/** Hands-on tool deep-dives and live video-call skills. Append IDs to preserve existing progress. */
const toolsHandsOnLessons = [
  {
    title: "Build a client workspace in Notion with databases and views",
    goal: "Set up a simple Notion workspace with linked databases, templates, and views that a client can use without you.",
    prereq: "Project workspace, SOP, and knowledge-base lessons.",
    teach:
      "Notion is popular because one workspace can hold notes, tasks, and documents, but it becomes a mess when pages are created without a plan. Start with the client's weekly routine, not the tool: what do they track, who needs to see it, and what do they check every morning. Then build around databases rather than loose pages. A database is a table of items such as tasks, clients, or content, and every item has properties like status, owner, due date, and type. Use a small number of properties and use select options instead of free text so reports stay clean. Create views of the same database for different needs: a board by status, a table of everything, a calendar by due date, and a filtered view such as 'Due this week'. Create a template for repeated items, such as a weekly checklist, so a new page starts with the right structure. Link databases with relations only when you need them, for example tasks linked to a client. Keep a single home page with links to the five things the client uses most, and name pages clearly. Set permissions carefully: give each person the lowest access that works, share only the needed pages, and keep private notes out of shared spaces. Never store passwords in Notion pages; point to the password manager. Test the workspace on a phone, add a short guide page, and train the client in 20 minutes. Review it after two weeks and remove anything unused.",
    example:
      "A fictional bakery owner tracks orders on sticky notes. The VA builds a Notion workspace with one Orders database (properties: status, pickup date, customer, owner) and four views: a board by status, a calendar by pickup date, a table of all orders, and a 'Today' view filtered to today's pickups. A template creates a new order page with a checklist. The home page links to the five views the owner uses. After a 20-minute training on the owner's phone, the owner adds the next order herself.",
    steps: [
      "Ask the client to describe their weekly routine and what they check each morning.",
      "Create a database with a few properties, using select options instead of free text.",
      "Add views for status, calendar, all items, and a filtered 'this week' view.",
      "Add a template for repeated items and a home page with the five key links.",
      "Set least-privilege sharing, test on a phone, and train the client with a one-page guide.",
    ],
    exercise:
      "Design the practice workspace: one database with properties, four views, one template, and a home page link list.",
    portfolio:
      "A workspace design with database properties, views, a template, and a one-page user guide.",
    mistake:
      "Creating many loose pages with no database makes information impossible to filter, report on, or hand over.",
    question:
      "Why use select options instead of free-text for a Status property?",
    options: [
      "They keep values consistent so filters and views work",
      "They look nicer",
      "Free text cannot be saved",
    ],
    answer: 0,
    explanation:
      "Consistent values make filters, boards, and reports reliable. Free text creates many spellings of the same status.",
    ready: [
      "Start from the client's routine, not the tool",
      "Build databases with few properties and views",
      "Add templates and a simple home page",
      "Share with least privilege and train the client",
    ],
    tools:
      "A free Notion workspace, a phone for testing, and a one-page guide.",
    taglish:
      "Sikat ang Notion dahil iisang workspace ang puwedeng paglagyan ng notes, task, at dokumento, pero nagiging magulo kapag gumawa ng page nang walang plano. Magsimula sa lingguhang routine ng client, hindi sa tool: ano ang sinusubaybayan nila, sino ang dapat makakita, at ano ang tinitingnan nila tuwing umaga. Saka bumuo gamit ang database at hindi mga hiwa-hiwalay na page. Ang database ay table ng mga item tulad ng task, client, o content, at bawat item ay may property tulad ng status, owner, due date, at uri. Gumamit ng kaunting property at select option sa halip na free text para malinis ang report. Gumawa ng mga view ng iisang database para sa iba't ibang pangangailangan: board ayon sa status, table ng lahat, calendar ayon sa due date, at filtered na view tulad ng 'Due this week'. Gumawa ng template para sa paulit-ulit na item para tama na ang istruktura pagbukas. Ikonekta ang mga database gamit ang relation kapag kailangan lang. Maglagay ng isang home page na may link sa limang pinakagamit ng client, at linawin ang pangalan ng bawat page. Itakda nang maingat ang permission: pinakamababang access na gumagana, ibahagi lang ang kailangang page, at ilayo ang pribadong notes sa shared na lugar. Huwag maglagay ng password sa Notion; ituro ang password manager. Subukan sa phone, magdagdag ng maikling gabay, at turuan ang client sa 20 minuto. I-review pagkalipas ng dalawang linggo at alisin ang hindi ginagamit.",
    proTips: [
      "Build the 'Today' view first. If the owner opens one thing each morning, make it that one.",
      "Name every page the way the client would search for it, in their words, not yours.",
    ],
    deepDive: [
      [
        "Databases, not loose pages",
        "A database turns items into rows with properties, so you can sort, filter, and report. Keep properties to what the client will actually use, and make them selects or dates, not free text. Every extra property is a chance for inconsistent data.",
      ],
      [
        "Views for each need",
        "One database can show as a board, table, calendar, or filtered list. Build only the views the client uses, starting with a 'Today' or 'This week' view. Fewer, clearer views get used; many views get ignored.",
      ],
      [
        "Handover and permissions",
        "Give each person the lowest access that works and share only the pages they need. Keep passwords out of the workspace. Write a one-page guide, train for 20 minutes on the client's phone, and review after two weeks.",
      ],
    ],
    practiceData:
      "Fictional client: a bakery owner who tracks custom cake orders on sticky notes. Needs: see today's pickups, see what is waiting for a deposit, avoid double-booking. Properties she cares about: customer, pickup date, deposit paid, status (new, baking, ready, picked up). A helper will update statuses but should not see the owner's finance pages.",
    modelAnswer:
      "Orders database with properties: customer (text), pickup date (date), deposit paid (checkbox), status (select: new, baking, ready, picked up), owner (person). Views: Board by status, Calendar by pickup date, Table of all, and 'Today' (pickup date is today, status not picked up). Template: new order with a checklist (confirm deposit, confirm design, confirm pickup time). Home page links to the four views and the guide. Helper gets edit access to Orders only; finance pages are not shared. Test on a phone, give a one-page guide, train for 20 minutes, review after two weeks.",
  },
  {
    title: "Prepare bookkeeping in accounting software without giving advice",
    goal: "Use accounting software to code transactions, match the bank feed, and prepare invoices accurately, while leaving tax and accounting judgments to the owner or accountant.",
    prereq:
      "Bookkeeping workflow, expense tracking, and monthly close lessons.",
    teach:
      "Tools such as QuickBooks, Xero, and Wave connect to a bank and suggest how to categorize each transaction. A VA can save the owner hours by keeping this tidy, but must stay within a clear role: prepare and organize, not give tax, legal, or accounting advice. Start by agreeing access and scope in writing: which accounts you may view, whether you can create or only draft, and who approves. Use your own login with the lowest role that works, never the owner's login, and ask for two-step verification. Each week, review the bank feed. For each transaction, match it to an existing record when there is one, such as an invoice paid or a bill, instead of creating a duplicate. Categorize using the chart of accounts the accountant gave you; if no category fits, do not invent one, mark it as a question. Attach the receipt, and write a clear memo such as 'Supplier A, 20 boxes, invoice 104'. Keep a list of questions for unclear items and send it to the owner or accountant in one batch. For invoices, use approved templates, check customer name, amounts, taxes as set up by the accountant, and due date, and send only after approval. Reconcile the account to the bank statement monthly and note any difference with the reason. Never delete or edit locked periods; ask the accountant. Do not guess tax treatment, and escalate it. Save a short monthly note of what was done and what is open.",
    example:
      "A fictional bakery uses accounting software with a bank feed. The VA, with a limited role, reviews the feed on Friday. A 2,400 deposit matches invoice 104, so she matches rather than creating income twice. A 310 payment to an unknown vendor has no receipt, so she marks it as a question. She categorizes the packaging purchase using the accountant's chart, attaches the receipt, and sends one list of three questions to the owner. At month end, the bank balance differs by 15; she notes it as 'bank fee not yet recorded' and asks the accountant how to record it.",
    steps: [
      "Agree access, role, and approvals in writing and use your own limited login with two-step verification.",
      "Match feed items to existing invoices and bills before creating anything new.",
      "Categorize with the accountant's chart; mark unclear items as questions with receipts attached.",
      "Prepare invoices from approved templates and send only after approval.",
      "Reconcile monthly, note differences with reasons, and leave locked periods and tax treatment to the accountant.",
    ],
    exercise:
      "Work through the practice bank feed: match, categorize, list questions, and write the month-end note.",
    portfolio:
      "A reconciled practice month with a questions list and a month-end note.",
    mistake:
      "Creating a new income entry for a payment that matches an existing invoice double-counts revenue and distorts every report.",
    question: "A bank deposit matches an open invoice. What should you do?",
    options: [
      "Match it to the invoice instead of creating a new income entry",
      "Create a new income transaction",
      "Delete the invoice",
    ],
    answer: 0,
    explanation:
      "Matching keeps income recorded once. Creating a separate entry double-counts revenue.",
    ready: [
      "Agree role and access in writing",
      "Match before creating, and attach receipts",
      "Ask questions instead of guessing categories or tax",
      "Reconcile monthly and note differences",
    ],
    tools:
      "Accounting software with a limited role, the chart of accounts, and the receipts folder.",
    taglish:
      "Ang mga tool tulad ng QuickBooks, Xero, at Wave ay konektado sa bangko at nagmumungkahi kung paano i-categorize ang bawat transaksyon. Nakakatipid ng oras ang VA sa pag-aayos nito, pero dapat nasa malinaw na papel: maghanda at mag-ayos, hindi magbigay ng payo sa buwis, legal, o accounting. Magsimula sa nakasulat na kasunduan sa access at saklaw: anong account ang puwede mong makita, kung puwede kang gumawa o mag-draft lang, at sino ang nag-aaprub. Gamitin ang sarili mong login na may pinakamababang role, hindi ang login ng owner, at hilingin ang two-step verification. Kada linggo, i-review ang bank feed. Para sa bawat transaksyon, i-match sa umiiral na record, tulad ng bayad na invoice o bill, sa halip na gumawa ng duplicate. I-categorize gamit ang chart of accounts ng accountant; kung walang akma, huwag mag-imbento, markahan bilang tanong. Ilakip ang resibo at sumulat ng malinaw na memo. Magtago ng listahan ng mga tanong at ipadala nang sabay-sabay sa owner o accountant. Sa invoice, gumamit ng aprubadong template, i-check ang pangalan ng customer, halaga, buwis ayon sa setup ng accountant, at due date, at ipadala lang pagkatapos ng approval. I-reconcile ang account sa bank statement kada buwan at itala ang pagkakaiba at dahilan. Huwag burahin o baguhin ang locked period; magtanong sa accountant. Huwag manghula ng tax treatment; i-escalate. Mag-save ng maikling buwanang tala ng nagawa at bukas pa.",
    proTips: [
      "Never clear a question by guessing. A parked question costs a minute; a wrong guess costs the accountant an hour at year end.",
      "Write the memo as if someone who has never seen the receipt will read it in a year. They will.",
    ],
    deepDive: [
      [
        "Role and access first",
        "Agree in writing what you may view, create, or only draft, and who approves. Use your own limited login, not the owner's, and turn on two-step verification. Clear access is what lets the owner trust you with the books.",
      ],
      [
        "Match, categorize, ask",
        "Match feed items to existing invoices and bills before creating new records. Categorize with the accountant's chart. When nothing fits or tax treatment is unclear, mark it as a question and send the batch to the owner or accountant.",
      ],
      [
        "Reconcile and leave notes",
        "Reconcile to the bank statement each month and explain every difference. Never edit locked periods. Leave a short note of what you did and what is open so the accountant can pick up without a call.",
      ],
    ],
    practiceData:
      "Fictional bank feed for the week: deposit 2,400 matching open invoice 104; payment 310 to 'MK Supply' with no receipt; payment 180 for packaging boxes (receipt available); payment 15 bank fee; deposit 500 from an unknown sender. Chart of accounts: Sales, Packaging, Bank fees, Supplies. Month-end bank balance differs from the books by 15.",
    modelAnswer:
      "Match the 2,400 deposit to invoice 104. Categorize the 180 boxes as Packaging and attach the receipt with memo 'Packaging boxes'. Categorize the 15 fee as Bank fees (explains the 15 difference). Mark the 310 MK Supply payment as a question (no receipt, vendor unknown) and the 500 deposit as a question (sender unknown; do not guess it is sales). Send one batch of two questions to the owner. Reconcile: the 15 difference is resolved by recording the bank fee; write the month-end note listing matched items and open questions, and leave tax treatment to the accountant.",
  },
  {
    title: "Build and test your first automation in Zapier or Make",
    goal: "Create a small, safe automation with a trigger, filter, and action, test it with fake data, and monitor it after launch.",
    prereq: "Process mapping, automation risk, and spreadsheet lessons.",
    teach:
      "Tools such as Zapier and Make connect apps so that when something happens in one, an action happens in another. They can save hours, but a careless automation can send wrong emails or duplicate records at scale. Start by mapping the manual process in plain words and confirm the rule with the owner: when this happens, do that, except when. Choose a small, low-risk first automation, such as adding new form responses to a tracking sheet and posting a notification to a team channel. Build in the order: trigger, filter, action. The trigger is the event, such as a new form response. The filter stops runs you do not want, such as test entries or entries missing an email. The action does the work, such as adding a row. Use test mode and fake data first, and check every field maps to the right column. Add a safeguard against duplicates, for example by checking whether the row already exists. For anything that sends messages to customers, start by sending to yourself or creating a draft for approval, not sending directly. Use accounts owned by the client, not personal ones, and connect only the permissions needed. Turn on error notifications so failures reach a person, and name the automation clearly with the owner and date. After launch, watch the first ten runs, then check weekly. Write a short guide: what it does, what can break, how to pause it, and who to call. Keep a way to turn it off in one click, and do not automate a process you do not yet understand.",
    example:
      "A fictional bakery gets custom-cake requests through a web form. The VA builds a Zap: when a new response arrives, a filter skips responses without an email or with 'test' in the name, then a row is added to the orders sheet and a message goes to the owner's channel. She tests with fake data, adds a duplicate check, and connects only the client-owned accounts. Error notifications go to her and the owner. After launch she watches the first ten runs, finds one date in the wrong format, fixes the mapping, and writes a one-page guide with how to pause it.",
    steps: [
      "Write the manual process as a rule with exceptions and confirm it with the owner.",
      "Build trigger, filter, and action in that order using client-owned accounts and minimum permissions.",
      "Test with fake data, check every field mapping, and add a duplicate safeguard.",
      "Send customer-facing messages to yourself or as drafts until proven.",
      "Turn on error alerts, watch the first ten runs, and write a guide with how to pause it.",
    ],
    exercise:
      "Design the practice automation on paper: trigger, filter, action, test data, error alert, and pause instructions.",
    portfolio:
      "An automation design with a test plan, error handling, and a one-page guide.",
    mistake:
      "Connecting a live trigger straight to a customer-facing email without testing can send wrong messages to many people in minutes.",
    question:
      "What is the safest way to test an automation that sends customer emails?",
    options: [
      "Send to yourself or create drafts with fake data first",
      "Turn it on for real customers and watch",
      "Skip testing since the tool is reliable",
    ],
    answer: 0,
    explanation:
      "Testing with fake data and safe outputs finds mapping mistakes before real customers see them.",
    ready: [
      "Confirm the rule and keep the first automation small",
      "Build trigger, filter, action with client-owned accounts",
      "Test with fake data and prevent duplicates",
      "Add error alerts, a guide, and an off switch",
    ],
    tools:
      "Zapier or Make free plan, a form, a sheet, and the client's channel.",
    taglish:
      "Ang mga tool tulad ng Zapier at Make ay nagkokonekta ng apps para kapag may nangyari sa isa, may aksyon sa isa pa. Nakakatipid sila ng oras, pero ang pabayang automation ay puwedeng magpadala ng maling email o gumawa ng duplicate nang marami. Magsimula sa pagmamapa ng manual na proseso sa simpleng salita at kumpirmahin ang tuntunin sa owner: kapag nangyari ito, gawin iyon, maliban kung. Pumili ng maliit at mababang-panganib na unang automation, tulad ng pagdagdag ng bagong sagot sa form sa tracking sheet at pag-post ng abiso sa channel. Buuin sa ganitong ayos: trigger, filter, action. Ang trigger ay ang pangyayari, tulad ng bagong sagot sa form. Ang filter ay humaharang sa ayaw mong run, tulad ng test entry o entry na walang email. Ang action ang gumagawa, tulad ng pagdagdag ng row. Gumamit ng test mode at pekeng data muna, at tiyaking tama ang mapping ng bawat field. Magdagdag ng proteksyon laban sa duplicate. Sa anumang magpapadala ng mensahe sa customer, magsimula sa pagpapadala sa sarili o draft para sa approval. Gumamit ng account na pag-aari ng client at ikonekta lang ang kailangang permission. I-on ang error notification para may taong makaalam, at pangalanan nang malinaw ang automation. Pagkatapos ng launch, bantayan ang unang sampung run, saka lingguhang check. Sumulat ng gabay: ano ang ginagawa, ano ang puwedeng masira, paano i-pause, at sino ang tatawagan. Huwag i-automate ang prosesong hindi mo pa naiintindihan.",
    proTips: [
      "Add a 'test' filter on day one: skip any entry whose name contains 'test'. It protects the live system from your own experiments.",
      "Keep a one-line 'how to turn this off' note at the top of the guide. In a mistake, speed matters more than cleverness.",
    ],
    deepDive: [
      [
        "Rule before tool",
        "Write the process as 'when this happens, do that, except when' and confirm it with the owner. If you cannot state the rule, you are not ready to automate it. Start with a small, low-risk process so mistakes are cheap.",
      ],
      [
        "Trigger, filter, action, test",
        "The trigger starts the run, the filter blocks unwanted runs, and the action does the work. Test with fake data, verify every field, and add a duplicate check. Send customer messages to yourself or as drafts until the runs are proven.",
      ],
      [
        "Monitor and hand over",
        "Use client-owned accounts and minimum permissions. Turn on error alerts, watch the first ten runs, then check weekly. Leave a guide with what the automation does, what can break, how to pause it, and who to contact.",
      ],
    ],
    practiceData:
      "Fictional process: custom cake requests arrive through a web form with name, email, pickup date, and message. Desired automation: add each request to the orders sheet and post a message to the owner's channel. Rules: skip entries with no email or a name containing 'test'; do not add the same email and pickup date twice. A past test entry named 'Test Test' exists.",
    modelAnswer:
      "Trigger: new form response. Filter: continue only if email is present and name does not contain 'test'. Duplicate check: look up the sheet for the same email and pickup date and stop if found. Action 1: add a row mapping name, email, pickup date, message to matching columns. Action 2: post a channel message to the owner. Test with fake data including a blank email and 'Test Test'. Use client-owned accounts with minimum permissions. Error alerts to the VA and owner. Watch the first ten runs. Guide: what it does, what can break (form field renamed), how to pause (toggle off), and who to call.",
  },
  {
    title: "Build a CRM report and dashboard the owner will read",
    goal: "Turn CRM data into a simple weekly report and dashboard that answer three questions the owner actually asks.",
    prereq: "CRM setup, pipeline hygiene, and honest metrics lessons.",
    teach:
      "A dashboard full of charts that nobody reads is wasted work. A useful CRM report in HubSpot, Zoho, or a similar tool answers a few questions the owner asks every week, such as how many new leads came in, how many deals moved forward, and what is stuck. Start by asking the owner for those three questions and who will read the report. Then check the data behind them: if stages are inconsistent or owners are missing, the report will be wrong, so clean the data first or state the limits. Build reports from standard fields and define each metric in a sentence, for example 'New leads: contacts created this week with lifecycle stage Lead'. Choose chart types that suit the question: a simple count or a number tile for totals, a bar chart for comparing stages, a line for change over time. Avoid decoration, 3D effects, and too many colors. Put the most important number at the top, show the period and the comparison, such as last week, and add one sentence about what changed. Keep the dashboard to six or fewer tiles and set filters for date ranges so it stays current. Check that the report matches the source: pick five records and verify they are counted. Note known data problems directly on the dashboard instead of hiding them. Send the weekly summary at the same time each week, with the dashboard link and three bullet points: what happened, what is stuck, and what to do next. Protect privacy by sharing dashboards with named people only and leaving out personal details that are not needed.",
    example:
      "A fictional catering business asks three questions: how many new leads this week, how many proposals are waiting more than ten days, and which source brings the best leads. The VA checks the data and finds 12 deals with no source, so she notes that on the dashboard. She builds a number tile for new leads (14, up from 9), a bar chart of open deals by stage, and a table of deals waiting more than ten days. She verifies five records against the CRM and sends a Monday summary with three bullets: leads up, three proposals stuck, fix missing sources.",
    steps: [
      "Ask the owner for the three questions and the readers.",
      "Check the data quality and clean or disclose gaps.",
      "Define each metric in one sentence and choose the simplest chart for each question.",
      "Build at most six tiles with the key number first, the period, and a comparison.",
      "Verify five records, share with named people, and send a three-bullet weekly summary.",
    ],
    exercise:
      "Define three metrics, sketch the dashboard, check the practice data for problems, and write the weekly summary.",
    portfolio:
      "A dashboard sketch with metric definitions and a sample three-bullet weekly summary.",
    mistake:
      "Building a report on dirty data and hiding the problem leads the owner to make decisions from numbers that are wrong.",
    question: "The CRM data has 12 deals with no source. What should you do?",
    options: [
      "Show the figure, note the 12 missing sources on the dashboard, and plan to fix them",
      "Hide them so the chart looks clean",
      "Assign them all to the biggest source",
    ],
    answer: 0,
    explanation:
      "Being open about data gaps keeps the report trustworthy. Guessing or hiding them leads to wrong decisions.",
    ready: [
      "Start from the owner's three questions",
      "Check data quality and disclose limits",
      "Define each metric and choose simple charts",
      "Verify against source records and send a short summary",
    ],
    tools:
      "A CRM with reports, a metric definitions note, and a weekly summary template.",
    taglish:
      "Sayang ang dashboard na puno ng chart pero walang bumabasa. Ang kapaki-pakinabang na CRM report sa HubSpot, Zoho, o katulad na tool ay sumasagot sa ilang tanong na itinatanong ng owner kada linggo, tulad ng ilan ang bagong lead, ilang deal ang umusad, at ano ang nakatigil. Magsimula sa pagtatanong sa owner ng tatlong tanong na iyon at kung sino ang babasa. Pagkatapos, i-check ang data sa likod nito: kung hindi pare-pareho ang stage o walang owner, mali ang report, kaya linisin muna o sabihin ang limitasyon. Gumawa ng report mula sa standard na field at ilarawan ang bawat metric sa isang pangungusap, halimbawa 'New leads: contact na nagawa ngayong linggo na may lifecycle stage Lead'. Pumili ng chart na akma sa tanong: number tile para sa kabuuan, bar chart para ihambing ang stage, at line para sa pagbabago sa paglipas ng panahon. Iwasan ang dekorasyon at sobrang kulay. Ilagay sa itaas ang pinakamahalagang numero, ipakita ang panahon at paghahambing tulad ng nakaraang linggo, at magdagdag ng isang pangungusap kung ano ang nagbago. Panatilihin sa anim o mas kaunting tile at magtakda ng date filter. I-verify na tugma sa source: pumili ng limang record at tingnan kung nabilang. Ilagay mismo sa dashboard ang kilalang problema sa data sa halip na itago. Magpadala ng weekly summary sa parehong oras kada linggo na may link at tatlong bullet: ano ang nangyari, ano ang nakatigil, ano ang gagawin. Protektahan ang privacy: ibahagi sa pinangalanang tao lang at huwag isama ang personal na detalye na hindi kailangan.",
    proTips: [
      "Put one sentence above every chart saying what the owner should notice. A chart without a sentence makes the owner do your job.",
      "Compare to last week, not to nothing. A number alone is trivia; a number with a comparison is information.",
    ],
    deepDive: [
      [
        "Questions before charts",
        "Ask the owner which three questions they ask every week and who reads the answers. Build only what answers those. Every extra chart competes for attention with the one that matters.",
      ],
      [
        "Clean and define",
        "Check stages, owners, and sources for gaps before reporting. Define each metric in a sentence and keep the definition visible. If the data is incomplete, say so on the dashboard instead of hiding it.",
      ],
      [
        "Present and verify",
        "Use simple charts, put the key number first, and show the period and a comparison. Verify five records against the CRM, share only with named people, and send a three-bullet summary each week.",
      ],
    ],
    practiceData:
      "Fictional CRM data: new leads this week 14, last week 9; open deals: new 8, call done 6, proposal sent 7, negotiating 3; three proposals have waited more than ten days; 12 deals have no lead source; lead sources recorded: referral 11, website 9, social 6. The owner asks: how many new leads, what is stuck, and which source is best.",
    modelAnswer:
      "Metrics: New leads (contacts created this week with stage Lead) = 14 vs 9 last week; Stuck deals (proposal sent more than 10 days) = 3; Leads by source (known sources only). Tiles: number for new leads, bar of open deals by stage, table of the three stuck deals, bar of source with a note 'source missing on 12 deals'. Verify five records. Weekly summary: leads up from 9 to 14; three proposals waiting over ten days, follow up; referral is the best known source but 12 deals lack a source, so fill them in before drawing conclusions. Share with named people only.",
  },
];

const liveCallLessons = [
  {
    title: "Show up well on video calls: audio, camera, and etiquette",
    goal: "Set up your audio, lighting, and background so clients can see and hear you clearly, and follow video-call habits that build trust.",
    prereq: "Communication, meeting, and remote work basics lessons.",
    teach:
      "Many clients meet you first on a video call, and the impression you give affects how much they trust you. Audio matters more than video: people forgive a plain picture but not a voice they cannot understand. Use a headset or a plug-in microphone close to your mouth, test it before calls, and use a quiet room. Check your connection ahead of time, close extra apps, and have a backup plan such as a phone hotspot or a phone call-in number. For the picture, put the camera at eye level, face a window or a lamp so light falls on your face, and avoid sitting with a bright window behind you. Keep the background plain and tidy; use a simple blur or a neutral background only if the platform supports it well. Join two minutes early, mute when not speaking, and look at the camera when you speak. Use clear words, speak a little slower than normal, and pause so a person on a delay can respond. Since you may be working across languages and accents, confirm key points by repeating them in writing in the chat. Be careful with screen sharing: close private tabs and messages first and share a single window rather than the whole screen. Ask permission before recording and say where the recording will be stored. After the call, send a short written recap within a day. If something fails, say so calmly, switch to the backup, and continue. Dress and behave as you would for a meeting in person, and keep your tone friendly and focused.",
    example:
      "A fictional VA has a first call with a bakery owner. The day before, she tests her headset, moves her desk lamp in front of her, and tidies the shelf behind her. She joins two minutes early, has her phone hotspot ready, and mutes until it is her turn. When the owner's connection lags, she repeats the key points in the chat. Before sharing her screen she closes her messages and shares only the spreadsheet window. After asking permission, she records the call and sends a short recap with next steps the same afternoon.",
    steps: [
      "Test your headset, connection, and backup plan before the call.",
      "Set the camera at eye level with light on your face and a tidy background.",
      "Join early, mute when not speaking, and speak clearly with pauses.",
      "Share a single window, close private content, and ask permission before recording.",
      "Send a written recap with decisions and next steps within a day.",
    ],
    exercise:
      "Make a pre-call checklist, record a 60-second practice intro, review it for audio and lighting, and write the recap message.",
    portfolio: "A pre-call checklist and a short practice recap message.",
    mistake:
      "Sharing your whole screen with private messages open can expose confidential information in seconds.",
    question: "What is the most important part of a good video-call setup?",
    options: [
      "Clear audio, because people cannot work with a voice they cannot understand",
      "A virtual background with animation",
      "The most expensive camera",
    ],
    answer: 0,
    explanation:
      "Clear audio matters most. A plain picture is fine; unclear sound makes the whole call harder.",
    ready: [
      "Test audio, connection, and a backup",
      "Fix lighting, camera height, and background",
      "Share a single window and ask before recording",
      "Send a recap with decisions and next steps",
    ],
    tools: "A headset, the call platform, a lamp, and a recap template.",
    taglish:
      "Maraming client ang unang nakakakilala sa iyo sa video call, at ang impresyon mo ay nakakaapekto sa tiwala nila. Mas mahalaga ang audio kaysa video: pinapatawad ang simpleng larawan pero hindi ang boses na hindi maintindihan. Gumamit ng headset o plug-in microphone na malapit sa bibig, subukan bago ang tawag, at gumamit ng tahimik na kuwarto. I-check ang koneksyon nang maaga, isara ang ibang app, at maghanda ng backup tulad ng phone hotspot o call-in number. Sa larawan, ilagay ang camera sa antas ng mata, humarap sa bintana o lampara para tumama ang ilaw sa mukha, at iwasang may maliwanag na bintana sa likod mo. Panatilihing simple at maayos ang background. Sumali nang dalawang minuto nang maaga, mag-mute kapag hindi nagsasalita, at tumingin sa camera kapag nagsasalita. Magsalita nang malinaw at bahagyang mas mabagal, at mag-pause para makasagot ang taong may delay. Dahil maaaring magkaiba ang wika at punto, ulitin nang nakasulat sa chat ang mahahalagang punto. Mag-ingat sa screen sharing: isara ang pribadong tab at mensahe at ibahagi ang isang window lang, hindi ang buong screen. Magtanong ng pahintulot bago mag-record at sabihin kung saan itatago. Pagkatapos ng tawag, magpadala ng maikling nakasulat na recap sa loob ng isang araw. Kung may pumalpak, sabihin nang kalmado, lumipat sa backup, at magpatuloy. Umasal na parang personal na meeting, at panatilihing magiliw at nakatutok ang tono.",
    proTips: [
      "Record yourself for 60 seconds once and watch it. You will fix three things instantly: sound, light, and where you look.",
      "Keep a sticky note by the camera with the call's three goals. It stops you drifting and keeps your eyes up.",
    ],
    deepDive: [
      [
        "Sound first",
        "Use a headset or a close microphone in a quiet room and test it before every important call. Have a backup: a phone hotspot or call-in number. People will tolerate a plain picture but not a voice they cannot follow.",
      ],
      [
        "Picture and presence",
        "Camera at eye level, light in front of you, tidy background. Join early, mute when not speaking, look at the camera, and speak a little slower with pauses. Repeat key points in the chat to help across accents and delays.",
      ],
      [
        "Privacy and follow-up",
        "Close private content and share only one window. Ask permission before recording and say where it will be stored. Send a written recap with decisions and next steps within a day.",
      ],
    ],
    practiceData:
      "Fictional call tomorrow with a new client at 9 AM. Your desk faces a bright window, your laptop mic echoes, and you keep private chat messages open in another window. The client's connection is unstable and you want to record the call.",
    modelAnswer:
      "Test a headset and move the desk or lamp so the light is in front, not behind. Close private chat before the call and share a single window only. Have a phone hotspot ready. Join at 8:58, mute when not speaking, and repeat key points in the chat since the client's connection is unstable. Ask for permission before recording and say where the recording will be stored. Send a recap within the day with decisions and next steps.",
  },
  {
    title: "Run a screen-share walkthrough or remote support session safely",
    goal: "Guide a client through a task on screen, or support them remotely, while protecting privacy and staying within your access.",
    prereq: "Security basics, SOP, and video-call lessons.",
    teach:
      "Screen sharing is how VAs train clients, review work, and troubleshoot. Done well, it builds trust; done carelessly, it can leak private data or cause damage. Before the call, agree the goal and prepare: list the steps, open only the windows you need, and close notifications and private tabs. Turn on 'do not disturb' on your computer. In the session, share one application window instead of the whole desktop, and tell the client what you will do before you click. Go slowly, name each action aloud, and pause for questions. If you are guiding the client on their own screen, let them click and type so they learn; if you must take control, ask permission, explain what you will do, and give control back when finished. Never ask for passwords. If a password or code must be entered, ask the client to type it themselves while you look away or while the screen is not shared, or use their password manager. Do not install software or change settings on their device unless the client has explicitly agreed and you understand the change. Do not access anything outside the agreed task, such as email or files that are visible. If private data appears accidentally, say so, close it, and do not copy it. After the session, send a written summary with steps in order, screenshots that hide private data, and a link to a short recording only if permission was given. Keep a note of what you accessed and changed. If the problem is beyond your role, such as a suspected security breach, stop and tell the client to contact their IT provider or the service's support.",
    example:
      "A fictional bakery owner cannot find where to approve orders in the new tool. The VA agrees a 20-minute session, lists five steps, and closes her own messages. She shares only the browser window and says, 'I will click Orders, then Pending.' The owner then tries it herself while the VA guides. When a payment page appears with card numbers, she says so, asks the owner to close it, and moves on. She sends a summary with numbered steps and screenshots that hide the customer names, and she notes that she did not change any settings.",
    steps: [
      "Agree the goal, prepare the steps, and close private windows and notifications.",
      "Share a single window and say what you will do before each click.",
      "Let the client do the clicking when possible; ask permission before taking control.",
      "Never ask for passwords, avoid installing or changing things without agreement, and stay within the task.",
      "Send a written summary with steps and privacy-safe screenshots, and log what was accessed.",
    ],
    exercise:
      "Plan a 20-minute walkthrough for a practice task: steps, windows to open, privacy risks, and the follow-up summary.",
    portfolio:
      "A walkthrough plan and a written summary with privacy-safe steps.",
    mistake:
      "Asking the client to tell you their password during a call puts their accounts at risk and breaks basic security practice.",
    question:
      "During a screen share, a page with customer card numbers appears. What should you do?",
    options: [
      "Say so, ask to close it, do not copy anything, and continue the task",
      "Take a screenshot for your records",
      "Keep going so you do not waste time",
    ],
    answer: 0,
    explanation:
      "Private data should be closed immediately, never copied, and mentioned openly so the client stays in control.",
    ready: [
      "Prepare steps and close private content",
      "Share one window and narrate your actions",
      "Never ask for passwords or make unagreed changes",
      "Send a privacy-safe written summary",
    ],
    tools: "A screen-share platform, a steps list, and a summary template.",
    taglish:
      "Ang screen sharing ay paraan ng VA para magsanay ng client, mag-review ng trabaho, at mag-troubleshoot. Kapag maayos, nagtatayo ito ng tiwala; kapag pabaya, puwedeng mag-leak ng pribadong data o magdulot ng pinsala. Bago ang tawag, pagkasunduan ang layunin at maghanda: ilista ang mga hakbang, buksan lang ang kailangang window, at isara ang notification at pribadong tab. I-on ang 'do not disturb'. Sa session, ibahagi ang isang application window sa halip na buong desktop, at sabihin sa client ang gagawin mo bago mag-click. Dahan-dahan, banggitin ang bawat aksyon, at mag-pause para sa tanong. Kung ginagabayan mo ang client sa sarili niyang screen, hayaang siya ang mag-click at mag-type para matuto; kung kailangan mong kontrolin, humingi ng pahintulot, ipaliwanag ang gagawin, at ibalik ang kontrol pagkatapos. Huwag kailanman humingi ng password. Kung kailangang maglagay ng password o code, ipa-type sa client mismo habang hindi nakabahagi ang screen, o gamitin ang password manager nila. Huwag mag-install ng software o magbago ng setting sa device nila nang walang malinaw na pahintulot at pag-unawa. Huwag buksan ang labas sa napagkasunduang gawain, tulad ng email o file na nakikita. Kung aksidenteng lumabas ang pribadong data, sabihin, isara, at huwag kopyahin. Pagkatapos, magpadala ng nakasulat na buod na may hakbang, screenshot na itinago ang pribadong data, at link ng recording kung may pahintulot. Itala ang na-access at binago mo. Kung lampas sa papel mo, tulad ng hinihinalang security breach, huminto at sabihan ang client na kontakin ang IT provider o support ng serbisyo.",
    proTips: [
      "Say 'I am about to click X' before you click. It keeps the client oriented and shows you are not doing anything hidden.",
      "Use a fresh browser profile for client sessions. It has no bookmarks, saved logins, or open tabs to leak.",
    ],
    deepDive: [
      [
        "Prepare before you share",
        "Agree the goal, write the steps, and close private windows, messages, and notifications. Turn on do-not-disturb. Share a single window rather than the whole desktop so nothing else can slip into view.",
      ],
      [
        "Teach by letting them click",
        "When training, let the client use their own mouse and keyboard so the skill sticks. If you must take control, ask first, narrate what you will do, and hand control back. Never ask for passwords or enter them for the client.",
      ],
      [
        "Stay in scope and document",
        "Do not install or change anything without clear agreement, and do not open anything outside the task. If private data appears, say so and close it. Send a written summary with privacy-safe screenshots and a note of what you accessed.",
      ],
    ],
    practiceData:
      "Fictional session: the bakery owner cannot find where to approve orders in the new tool and shares a laptop where her email is open. Steps needed: open Orders, filter to Pending, approve two orders. During the call, a payment page with partial card numbers appears. The owner offers to tell you her login password to save time.",
    modelAnswer:
      "Plan: agree the 20-minute goal, list the three steps, share only the browser window, and ask the owner to close her email first. Narrate each action; let the owner click. When the payment page appears, say so, ask her to close it, and do not copy anything. Decline the password politely: 'Please do not share it; you stay signed in and I will guide you.' Send a written summary with numbered steps and screenshots with customer names hidden, and a note that no settings were changed.",
  },
];

const toolsHandsOnModuleIndex = modules.length;
modules.push([
  "Tool deep-dives: Notion, accounting, automation, and CRM reports",
  "Hands-on builds in the tools clients ask for by name.",
  "Advanced workflow",
  toolsHandsOnLessons,
]);
toolsHandsOnLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${toolsHandsOnModuleIndex}-${index}`,
    mi: toolsHandsOnModuleIndex,
    li: index,
  });
});

const liveCallModuleIndex = modules.length;
modules.push([
  "Live calls and screen sharing",
  "Show up well on video and run screen-share sessions safely.",
  "Advanced workflow",
  liveCallLessons,
]);
liveCallLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${liveCallModuleIndex}-${index}`,
    mi: liveCallModuleIndex,
    li: index,
  });
});
