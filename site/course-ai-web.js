/** AI tools in daily work, and content and web support. Append IDs to preserve existing progress. */
const aiDailyLessons = [
  {
    title: "Research with AI and verify every source",
    goal: "Use AI to speed up research while keeping facts, links, and numbers trustworthy.",
    prereq: "Research, prompt writing, and AI verification lessons.",
    teach:
      "AI can summarize, compare, and suggest search directions, but it can also invent sources, mix up facts, and sound certain when it is wrong. Treat it as a fast assistant that needs a checker. Start with a clear question, the purpose of the research, and the format you need, such as a comparison table. Ask the AI to list what it is unsure about and to suggest where to verify, not to give final facts. Then verify every important claim yourself: open the original source, check the date and author, and confirm that the number or quote really appears there. Never include a source you have not opened. Prefer primary sources such as official sites, documents, and product pages over summaries. Record each claim with its source link and the date you checked, because information changes. Mark anything you could not verify as unverified instead of leaving it out or guessing. Do not paste confidential client information into a tool unless the client has approved that tool, and read the tool's data terms. When you deliver research, show the sources and what you verified, and note the limits. If AI gave a claim that you could not confirm, say so plainly. Keep a short log of where AI helped and where it misled, so you learn its habits and improve your prompts over time.",
    example:
      "The VA asks an AI tool to compare three fictional packaging suppliers. The answer lists a price for supplier B that looks too good. The VA opens the supplier's page and finds the price is for 1,000 units, not 100. The final table shows the verified price, the link, and the date checked, and marks supplier C's delivery time as unverified.",
    steps: [
      "Write a clear research question, purpose, and format before using AI.",
      "Ask AI for options and what it is unsure about, not final facts.",
      "Open each original source and check date, author, and the exact claim.",
      "Record the claim, source link, and date checked in a table.",
      "Mark unverified items and deliver with sources and limits.",
    ],
    exercise:
      "Take the practice AI answer, verify each claim against the practice sources, correct the errors, and produce a short comparison table with source and status columns.",
    portfolio:
      "A verified research table with source links and an AI-assisted note.",
    mistake:
      "Copying an AI-provided link or figure without opening it can put an invented source in front of a client.",
    question:
      "An AI tool gives a statistic with a link you have not opened. What do you do?",
    options: [
      "Open the source, confirm the number, and record the date, or mark it unverified",
      "Use it; the link is probably right",
      "Delete the statistic without telling anyone",
    ],
    answer: 0,
    explanation:
      "Only a claim you have checked at its source is research. Otherwise label it unverified.",
    ready: [
      "Ask AI for options and uncertainty, not final facts",
      "Verify claims at the original source",
      "Record sources and dates",
      "Deliver with limits stated",
    ],
    tools:
      "An AI assistant approved by the client, a browser, and a spreadsheet.",
    taglish:
      "Mabilis ang AI sa pag-research pero puwede itong mag-imbento ng source at magmukhang sigurado kahit mali. Ituring itong mabilis na assistant na kailangan ng checker. Magsimula sa malinaw na tanong at format. Utusan ang AI na ilista kung ano ang hindi nito sigurado. Pagkatapos, buksan mo mismo ang bawat mahalagang source, i-check ang petsa at may-akda, at tiyaking nandoon talaga ang numero. Itala ang claim, link, at petsa. Markahang unverified ang hindi mo napatunayan. Huwag mag-paste ng kumpidensyal na impormasyon sa tool na hindi aprubado.",
    proTips: [
      "Ask the AI to quote the exact sentence it relies on, then search for that sentence yourself.",
      "Date every research table; prices and policies change without warning.",
    ],
    deepDive: [
      [
        "Spot likely errors",
        "Be extra careful with numbers, dates, names, quotes, and links. Those are the parts AI most often gets wrong. A claim that is too neat or too convenient deserves a second look.",
      ],
      [
        "Keep a prompt-and-check log",
        "Write the prompt, the answer's weak spots, and what you changed. After a month you will see patterns and can write better prompts and checks.",
      ],
    ],
    practiceData:
      "Fictional AI answer: 'Supplier A sells 100 boxes for 40 (flat), Supplier B sells 100 boxes for 25, Supplier C delivers in 2 days.' Sources: A's page says 100 boxes for 40. B's page says 1,000 boxes for 250 (100 boxes not offered). C's page says delivery 5 to 7 days.",
    modelAnswer:
      "Supplier A is verified at 40 for 100 boxes. Supplier B's claim is wrong for 100 boxes because B only sells 1,000 for 250, so the per-unit price is 0.25 but the minimum is 1,000. Supplier C's 2-day delivery is wrong; the page says 5 to 7 days. The table lists each claim, source link, date checked, and status, with corrections noted and no unverified item presented as fact.",
  },
  {
    title: "Use AI for meeting notes without losing accuracy or privacy",
    goal: "Turn recordings and notes into reliable minutes while protecting confidential information.",
    prereq: "Meeting minutes, AI verification, and privacy lessons.",
    teach:
      "AI transcription and summary tools can save hours, but meetings often contain private or sensitive information, and summaries can twist what was said. Before recording, ask the client and every participant for permission, and follow the organization's rules on recording. Use only a tool the client approved and check where recordings and transcripts are stored and who can see them. Decide in advance what must not be recorded, such as personal data or legal discussions. After the meeting, treat the AI summary as a first draft. Compare it with your own notes or the recording for key points: decisions, action items, owners, dates, and numbers. Check that the tool did not turn a maybe into a decision or assign an action to the wrong person. Remove names and details that should not be shared widely. Write the final minutes in a standard format: purpose, attendees, decisions, actions with owner and due date, open questions, and next meeting. Send the minutes for approval before circulating them. Delete or secure recordings and transcripts according to the retention rule, and do not forward them casually. When the AI mishears names or terms, correct them and add them to a glossary for next time. If the tool fails or the meeting is sensitive, take manual notes instead.",
    example:
      "An AI summary of a fictional bakery meeting says, 'Maya will launch the menu on Saturday.' The recording shows she said, 'We might launch Saturday if the photos arrive.' The VA changes the minutes to a conditional launch with photos as a dependency and sends them for the owner's approval.",
    steps: [
      "Get permission to record and choose a client-approved tool.",
      "Define what must not be recorded and how long files are kept.",
      "Compare the AI summary with notes or the recording for decisions, owners, dates, and numbers.",
      "Write final minutes in a standard format and send for approval.",
      "Secure or delete recordings as the retention rule requires.",
    ],
    exercise:
      "Review the practice AI summary against the practice transcript, correct it, and write final minutes with decisions, actions, and open questions.",
    portfolio:
      "A checked set of meeting minutes with a note on what AI changed.",
    mistake:
      "Trusting an AI summary that turns maybes into decisions can send people off to do the wrong things.",
    question:
      "The AI summary says an action was assigned to Ben, but the transcript has no owner. What do you do?",
    options: [
      "Keep Ben as the owner",
      "Assign it to yourself",
      "Mark the owner as unassigned and list it as an open question for confirmation",
    ],
    answer: 2,
    explanation:
      "Minutes record what was actually decided. Unclear ownership belongs in open questions until someone confirms it.",
    ready: [
      "Get recording permission and use approved tools",
      "Verify summaries against the source",
      "Write standard minutes and get approval",
      "Secure or delete recordings",
    ],
    tools:
      "A client-approved transcription tool, the recording, and a minutes template.",
    taglish:
      'Nakakatipid ng oras ang AI transcription at summary, pero madalas may pribadong impormasyon ang meeting at puwedeng mabago ng summary ang sinabi. Humingi ng pahintulot sa lahat bago mag-record at gumamit lang ng tool na aprubado ng client. Ituring ang AI summary na unang draft. Ihambing sa notes o recording ang desisyon, action, owner, petsa, at numero. Tiyaking hindi ginawang desisyon ang "baka" at hindi nalagay sa maling tao ang action. Isulat ang final minutes at ipa-approve bago ipamahagi. I-secure o burahin ang recording ayon sa retention rule.',
    proTips: [
      "Read decisions and owners aloud at the end of the meeting so the recording confirms them.",
      "Keep a glossary of names and terms so the tool mishears them less each time.",
    ],
    deepDive: [
      [
        "Handle consent properly",
        "Say at the start that the meeting is being recorded and why. If anyone objects, stop recording or follow the organization's rule. Local rules on recording differ, so ask the client what applies.",
      ],
      [
        "Review in a fixed order",
        "Check decisions first, then actions and owners, then numbers and dates, then names. This order catches the errors that matter most before you polish wording.",
      ],
    ],
    practiceData:
      "Fictional transcript: Maya: 'We might launch Saturday if the photos arrive.' Ben: 'I can ask the photographer, maybe Thursday.' Maya: 'Price is around 18, let me confirm.' AI summary: 'Launch is Saturday. Ben will deliver photos Thursday. Price is 18.' One participant did not consent to being recorded.",
    modelAnswer:
      "Corrected minutes: launch is conditional on photos; Ben will ask the photographer about Thursday (not a delivery commitment); price is unconfirmed, Maya to confirm. The consent issue is flagged to the client before the recording or summary is shared, and the recording is handled per the retention rule. Open questions list the photo date and the confirmed price. The minutes go to Maya for approval first.",
  },
  {
    title: "Use AI for spreadsheets and formulas with proof",
    goal: "Get formula help from AI and prove it works before relying on it.",
    prereq:
      "Spreadsheet formulas, data validation, and AI verification lessons.",
    teach:
      "AI can suggest formulas, explain errors, and propose ways to clean data, which saves time when you are stuck. But a formula that looks right can return wrong results on your real data. Use a safe routine. First, describe the data precisely: the columns, an example of each value type, the goal, and the tool you use. Never paste private customer data into an unapproved tool; replace it with fictional examples that have the same shape. Second, ask for the formula and a plain-language explanation of what each part does, so you can understand it rather than copy it. Third, test it on a small sample with a known answer, including edge cases: blank cells, duplicates, text in number columns, and dates in different formats. Fourth, compare the result with a second method, such as a manual sum or a filter. Fifth, apply it to the full data only after the tests pass, and keep a copy of the original. Document the formula and its limits next to the sheet. If you cannot explain a formula to the client, do not leave it in their file. Watch for locked ranges, because AI often forgets absolute references when you fill a formula down. Keep a personal list of tested formulas so you rely less on guessing.",
    example:
      "An AI suggests =SUMIF(B:B,\"Paid\",C:C) for totals, but the status column has 'paid' and 'Paid ' with a trailing space. The VA's test sample shows a total of 60 instead of the expected 75. After trimming the statuses, the formula returns 75 and the manual sum agrees.",
    steps: [
      "Describe the data and goal precisely using fictional sample values.",
      "Ask for the formula and a plain-language explanation of each part.",
      "Test on a small sample with edge cases and a known answer.",
      "Compare with a second method and keep a copy of the original.",
      "Apply to full data, then document the formula and its limits.",
    ],
    exercise:
      "Use the practice AI formula on the sample data, find where it fails, fix the data or formula, and write a short note on what you tested.",
    portfolio: "A tested formula sheet with sample data, results, and notes.",
    mistake:
      "Pasting an AI formula into the full client sheet without testing can silently produce wrong totals.",
    question:
      "An AI formula gives 60 but your manual sum is 75. What should you do?",
    options: [
      "Trust the formula; AI is accurate",
      "Investigate the difference, such as trailing spaces or case, and fix before using it",
      "Round the result",
    ],
    answer: 1,
    explanation:
      "A mismatch between methods signals a data or formula problem that must be understood and fixed first.",
    ready: [
      "Describe data without private details",
      "Ask for explanations, not only formulas",
      "Test edge cases and compare methods",
      "Document formulas and limits",
    ],
    tools: "Google Sheets or Excel and an approved AI assistant.",
    taglish:
      "Puwedeng magmungkahi ng formula ang AI, pero ang formulang mukhang tama ay puwedeng magbigay ng maling resulta sa totoong data mo. Ilarawan nang eksakto ang data gamit ang pekeng halimbawa; huwag mag-paste ng pribadong customer data sa hindi aprubadong tool. Hingin ang formula at paliwanag ng bawat bahagi. I-test sa maliit na sample na alam mo ang sagot, kasama ang blanks, duplicate, at magkakaibang format. Ihambing sa ikalawang paraan, tulad ng manual sum. Idokumento ang formula. Kung hindi mo maipaliwanag sa client, huwag iwan sa file nila.",
    proTips: [
      "Test with a row that should break the formula; if nothing breaks, the test is too gentle.",
      "Keep a 'tested formulas' tab you can reuse across clients with fictional examples.",
    ],
    deepDive: [
      [
        "Test edge cases on purpose",
        "Include blanks, extra spaces, different capitalization, text where numbers are expected, and dates in two formats. Real data is messier than the sample you describe to AI.",
      ],
      [
        "Keep the file safe",
        "Work on a copy and keep the original untouched. Record what you changed, so you can undo it if the client questions a total.",
      ],
    ],
    practiceData:
      "Fictional data: Status column values: Paid, paid, 'Paid ' (trailing space), Pending, Paid. Amounts: 10, 20, 15, 5, 30 in the same order. AI formula: =SUMIF(B:B,\"Paid\",C:C). Expected total for all paid rows: 10 + 20 + 15 + 30 = 75, with the trailing-space and lowercase rows included.",
    modelAnswer:
      "The formula counts only exact 'Paid' (case-insensitive in many tools) and misses the trailing-space row, so the result excludes 15 and gives 60 instead of 75. Fix by trimming statuses with a helper column or TRIM, then retest to get 75 and confirm with a manual sum. The note documents the data issue, the fix, and the tests, and the original sheet is kept as a copy.",
  },
  {
    title: "Write your personal AI-use policy and tell clients about it",
    goal: "Set clear rules for when you use AI, what you never put into it, and how you disclose it.",
    prereq: "AI verification, privacy, and client communication lessons.",
    teach:
      "Clients increasingly ask whether VAs use AI, and the honest answer is a short written policy. A good policy covers what tools you use and for what tasks, what data you never enter, how you check output, how you disclose use, and what happens if something goes wrong. List the tasks where AI helps, such as drafting, summarizing, and formula help, and the tasks where you do not use it without permission, such as handling personal data, legal text, or final client decisions. State that you never enter confidential client information, credentials, or personal data into tools that the client has not approved, and that you check each tool's data terms. Explain your verification routine: you check facts, numbers, names, and links against sources before delivery. Say how you disclose AI help, for example in a delivery note, and respect any client rule that bans or limits AI. Include how you handle errors: you correct them, tell the client, and review what caused them. Review the policy regularly because tools and rules change. Offer the client a choice and follow their instruction. Keep the policy short, plain, and honest, and never claim that work is entirely human-made if AI helped materially where disclosure is expected. A transparent policy builds trust and sets you apart from careless users.",
    example:
      "A fictional bakery owner asks, 'Do you use AI?' The VA sends a half-page policy: AI is used for drafting and formula help; no customer data is entered; every fact is checked before delivery; and the owner can switch AI off for any task. The owner approves and asks for AI-drafted replies only for routine pickup questions.",
    steps: [
      "List tasks where you use AI and where you do not without permission.",
      "State what data you never enter and how you check tool terms.",
      "Describe your verification routine and how you disclose AI help.",
      "Explain how you handle and report errors.",
      "Share it with clients, follow their choices, and review it regularly.",
    ],
    exercise:
      "Write a half-page AI-use policy for your practice, and a short message offering it to a new client and asking for their preferences.",
    portfolio: "A half-page AI-use policy and client message.",
    mistake:
      "Quietly using AI on sensitive material, or claiming work is entirely manual when it is not, can destroy trust.",
    question:
      "A client says not to use AI for their customer emails. What do you do?",
    options: [
      "Follow their instruction, note it in the client profile, and write the emails yourself",
      "Use it anyway; they will not notice",
      "Ask them to change their mind",
    ],
    answer: 0,
    explanation:
      "The client sets the rules for their data and communications. Respect the instruction and record it.",
    ready: [
      "State where you do and do not use AI",
      "Protect confidential data",
      "Describe checks and disclosure",
      "Follow client preferences",
    ],
    tools: "Docs and the client's own policy documents.",
    taglish:
      "Mas madalas nang itinatanong ng clients kung gumagamit ng AI ang VA, kaya maghanda ng maikling nakasulat na patakaran. Ilista kung saan mo ginagamit ang AI at kung saan hindi nang walang pahintulot. Sabihin kung anong data ang hindi mo ipinapasok at na chine-check mo ang terms ng tool. Ilarawan ang pag-verify mo ng facts bago mag-deliver at kung paano mo ipinapaalam ang paggamit ng AI. Isama kung paano mo itatama at iuulat ang mali. Sundin ang pasya ng client at i-review ang patakaran paminsan-minsan. Ang tapat na patakaran ay nagpapatibay ng tiwala.",
    proTips: [
      "Put the policy link in your onboarding pack so the question is answered before it is asked.",
      "Record each client's AI preference in their one-page profile and re-read it before starting work.",
    ],
    deepDive: [
      [
        "Keep it short and plain",
        "A half page is enough. Avoid vague words such as 'responsible'. Say what you do: which tools, which tasks, what you check, and who can turn it off.",
      ],
      [
        "Review and update",
        "Set a date to review the policy every quarter. Tools change their data terms, and clients change their rules, so a stale policy is a risk.",
      ],
    ],
    practiceData:
      "Fictional situation: You use an AI assistant for drafting replies and formula help. The client has customer names and phone numbers in their order sheet. The client has not approved any AI tool. A new client asks you to draft 30 replies quickly.",
    modelAnswer:
      "The policy lists drafting and formula help as AI tasks, and says customer names, phone numbers, and credentials are never entered. Because no tool is approved, the VA asks the client to approve one and reviews its data terms before using it, using fictional examples meanwhile. For the 30 replies, the VA drafts without personal data, checks each against the order sheet, discloses AI help in the delivery note, and follows the client's choice.",
  },
];

const webContentLessons = [
  {
    title: "Run a blog post pipeline from idea to checked publish",
    goal: "Move content through clear stages with facts, rights, and approvals checked at each step.",
    prereq: "Content calendar, captions, and project coordination lessons.",
    teach:
      "A blog post pipeline turns ideas into published posts without chaos. Define stages: idea, brief, draft, edit, fact-check, approval, scheduled, and published, and track each post in one sheet with owner, due date, and status. Start with a short brief: the goal, the reader, the main point, the key facts and sources, the length, and the call to action. Draft using only facts from approved sources, and note each source next to the claim. Edit for clarity and tone, and check spelling, links, names, dates, and numbers. Fact-check separately from editing, ideally by someone who did not write the draft. Make sure images are owned or licensed, add alternative text that describes them, and record the license. Check that any health, money, or results claims are supported or removed, and that disclosures for paid or affiliate content are included where required. Send for written approval from the person the client named, and publish only after approval. After publishing, open the live page on desktop and phone, test links, check formatting, and record the link and date. Update posts that become outdated, and keep a log of edits. Do not copy text or images from other sites, and do not publish AI text without checking and rewriting it into the client's voice.",
    example:
      "A fictional bakery blog post says 'our cookies are the healthiest in town.' The fact-check stage finds no evidence. The VA removes the claim, replaces it with the verified fact that the recipe uses oats, adds a licensed image with alt text, and sends the post for approval before scheduling.",
    steps: [
      "Define the stages and track each post with owner, due date, and status.",
      "Write a brief with goal, reader, main point, sources, and call to action.",
      "Draft from approved facts, note sources, then edit and fact-check separately.",
      "Check images, alt text, disclosures, and claims.",
      "Get written approval, publish, then check the live page and log it.",
    ],
    exercise:
      "Take the practice draft through the pipeline: list the problems found at each stage, rewrite one claim, and write the approval request.",
    portfolio: "A content pipeline tracker and a checked blog post brief.",
    mistake:
      "Combining editing and fact-checking lets confident wording hide unsupported claims.",
    question:
      "A draft says 'healthiest in town' with no evidence. What do you do?",
    options: [
      "Keep it; it sounds good",
      "Remove or replace it with a verified fact and flag it to the client",
      "Add an exclamation mark",
    ],
    answer: 1,
    explanation:
      "Unsupported claims should be removed or replaced with facts that can be verified.",
    ready: [
      "Track posts through defined stages",
      "Brief, draft, edit, and fact-check separately",
      "Check images, claims, and disclosures",
      "Publish after approval and verify live",
    ],
    tools: "A tracker sheet, the CMS, and licensed image sources.",
    taglish:
      "Ang blog post pipeline ay nagdadala ng ideya hanggang sa na-check na publish nang hindi magulo. Tukuyin ang mga yugto: idea, brief, draft, edit, fact-check, approval, scheduled, at published. Magsimula sa maikling brief na may layunin, mambabasa, pangunahing punto, source, at call to action. Gumamit lang ng facts mula sa aprubadong source. Ihiwalay ang pag-edit at fact-check. Tiyaking may karapatan ang larawan at may alt text. Alisin ang claim na walang ebidensya. Publish lang pagkatapos ng nakasulat na approval, at i-check ang live page sa desktop at phone.",
    proTips: [
      "Write the source next to every claim in the draft; delete the notes only after approval.",
      "Read the published post on your phone before telling the client it is live.",
    ],
    deepDive: [
      [
        "Brief before you draft",
        "A good brief takes ten minutes and saves hours of rewriting. If the client cannot say what the post should achieve, ask before drafting.",
      ],
      [
        "Check rights and claims",
        "Use images you own or have a license for and record the license. Remove health or results claims unless the client gives evidence.",
      ],
    ],
    practiceData:
      "Fictional draft: 'Our oat cookies are the healthiest in town and cure afternoon cravings!' Facts approved: recipe uses oats; box of 12 costs 18; pickup Saturday 9–11 AM. Image: a stock photo with unknown license. No disclosure needed. Approver: the owner.",
    modelAnswer:
      "Problems: 'healthiest' and 'cure cravings' are unsupported; the stock photo license is unknown; the post lacks a call to action. Fixes: replace the claims with 'made with oats', add the approved price and pickup details, use an owned or licensed image with alt text, add a call to order by Thursday 5 PM if approved, and send for the owner's written approval before scheduling.",
  },
  {
    title: "Apply basic SEO hygiene without keyword stuffing",
    goal: "Improve how pages are found using clear titles, descriptions, headings, and honest content.",
    prereq: "Captions, blog pipeline, and analytics lessons.",
    teach:
      "Search engine optimization, or SEO, is the practice of helping the right people find a page. The basics are simple and honest. Each page should have a clear title that says what the page is about, a short description that would make a person want to click, one main heading, and sensible subheadings. Use words that real customers use, found by looking at their questions and search suggestions, and place them naturally. Do not stuff pages with repeated keywords, hide text, or buy links; search engines penalize this, and it makes content worse. Write for people first. Add descriptive alternative text to images, use readable link text rather than 'click here', and keep page addresses short and clear. Check that the page loads reasonably fast on a phone, works without horizontal scrolling, and has working links. Make sure basic business information such as address, hours, and contact details is accurate and consistent across the website and listings. Track a few simple measures, such as which pages get visits and which queries bring people, and review them monthly. SEO takes weeks or months, so avoid promising rankings. Make small changes, record them with dates, and compare results fairly. Never guarantee results to a client, and never use tricks that put their site at risk.",
    example:
      "A fictional bakery's pickup page has the title 'Page 2' and no description. The VA changes the title to 'Cookie Box Pickup in Harbor Town | Sunrise Bakery', writes a clear description with the pickup window, adds alt text to the photo, and corrects the hours that differ from the listing. The VA records the date and checks visits after a month.",
    steps: [
      "Give each page a clear title, description, main heading, and subheadings.",
      "Use natural words customers actually use and avoid stuffing.",
      "Add alt text, readable link text, and short clear addresses.",
      "Check mobile loading, working links, and consistent business details.",
      "Record changes with dates and review simple measures monthly without promising rankings.",
    ],
    exercise:
      "Rewrite the practice page's title, description, and heading, fix one image alt text and one link, and list the inconsistent business details.",
    portfolio: "A before-and-after page SEO checklist with dated changes.",
    mistake:
      "Repeating a keyword many times makes content worse and can get a site penalized.",
    question:
      "A client asks you to guarantee a first-page ranking. What do you say?",
    options: [
      "Yes, with enough keywords",
      "Use hidden text to be safe",
      "I cannot guarantee rankings, but I can improve titles, content, and consistency and track results",
    ],
    answer: 2,
    explanation:
      "No one controls search rankings. Honest improvements and tracking are the reliable approach.",
    ready: [
      "Write clear titles and descriptions",
      "Avoid keyword stuffing",
      "Fix alt text, links, and business details",
      "Track changes without promising rankings",
    ],
    tools: "The website CMS, a search console tool, and a spreadsheet log.",
    taglish:
      "Ang SEO ay pagtulong para makita ng tamang tao ang isang page. Bigyan ang bawat page ng malinaw na title, maikling description, isang pangunahing heading, at tamang subheading. Gamitin ang mga salitang talagang ginagamit ng customers at ilagay nang natural. Huwag mag-keyword stuffing, magtago ng teksto, o bumili ng link; mapaparusahan ito at pumapangit ang content. Magdagdag ng alt text, malinaw na link text, at tiyaking pare-pareho ang address at oras sa website at listings. Itala ang pagbabago na may petsa at huwag mangako ng ranggo.",
    proTips: [
      "Search your target words yourself and read what the top results actually answer.",
      "Date every change so a later rise or fall can be traced to something.",
    ],
    deepDive: [
      [
        "Write for the person first",
        "Read the title and description aloud. If you would not click it, rewrite it. Clear, honest wording helps both readers and search engines.",
      ],
      [
        "Keep business details consistent",
        "Hours, address, and phone should match on the website, social profiles, and listings. Inconsistent details confuse customers and weaken trust.",
      ],
    ],
    practiceData:
      "Fictional page: title 'Page 2'; no description; heading 'Welcome'; text repeats 'best cookies best cookies best cookies'; image alt text is 'IMG_204'; link text is 'click here'. Website hours say Saturday 9–11 AM; the listing says Saturday 8–12.",
    modelAnswer:
      "Title: 'Cookie Box Pickup in Harbor Town | Sunrise Bakery'. Description: 'Order by Thursday 5 PM and pick up fresh cookie boxes on Saturday 9–11 AM.' Heading: 'Pick up your cookie box'. Remove the repeated phrase. Alt text: 'Box of twelve oat cookies'. Link text: 'See the order form'. The Saturday hours mismatch (9–11 versus 8–12) is flagged to the owner to confirm, and changes are logged with the date.",
  },
  {
    title: "Update a website safely with previews, backups, and approvals",
    goal: "Make content changes on a live site without breaking it or publishing the wrong thing.",
    prereq: "Version control, quality checks, and access lessons.",
    teach:
      "A website is the client's storefront, and a careless edit can break pages or show wrong information. Work through a safe routine. Get the access you need at the lowest level, such as editor rather than administrator, using your own user account. Before editing, confirm what you are changing, why, and who approves it, and keep the request in writing. Create or check a backup, or ask the client or host how backups work, so you can restore if something breaks. Where possible, make changes in a draft or staging copy and use the preview to check how they look on desktop and phone. Edit one thing at a time, save versions, and avoid changing settings, plugins, or code unless that is your agreed role. Check every link, image, form, and price on the changed page. Ask for approval with a preview link or screenshot before publishing. After publishing, open the live page, hard-refresh it, test the main actions, and confirm that nothing else changed. Record the change, date, and approver in a log. If something breaks, stop, tell the client, and restore from the backup rather than trying risky fixes. Never install plugins or paste code from unknown sources, and never share admin credentials. Remove your access when the project ends.",
    example:
      "A fictional bakery wants the Saturday pickup time updated. The VA confirms the request in writing, checks that a backup exists, edits the draft page, and sends a preview screenshot. After approval, the VA publishes, checks the live page on a phone, and logs the change. A form button that broke is spotted in the preview and fixed before publishing.",
    steps: [
      "Use your own editor-level account and confirm the requested change in writing.",
      "Check that a backup exists and edit in draft or staging if possible.",
      "Edit one thing at a time and test links, images, forms, and prices.",
      "Send a preview for approval before publishing.",
      "Verify the live page, log the change, and remove access when done.",
    ],
    exercise:
      "Write the change plan for the practice update: access level, backup check, steps, tests, approval message, and rollback plan.",
    portfolio: "A website change log and a safe-edit checklist.",
    mistake:
      "Editing a live page without a backup or preview can break it with no easy way to recover.",
    question: "A page breaks after your edit. What should you do first?",
    options: [
      "Stop, tell the client, and restore from the backup or previous version",
      "Try random fixes until it works",
      "Delete the page",
    ],
    answer: 0,
    explanation:
      "Restoring a known good version limits damage. Experimenting on a live site makes problems worse.",
    ready: [
      "Use least access and written requests",
      "Back up and preview before publishing",
      "Test after publishing and log changes",
      "Restore calmly when something breaks",
    ],
    tools:
      "The site's CMS (such as WordPress or Wix), the preview tool, and a change log.",
    taglish:
      "Ang website ang tindahan ng client, kaya ang pabayang edit ay puwedeng makasira ng page o magpakita ng maling impormasyon. Gumamit ng sarili mong editor-level na account at isulat ang hiling. Tiyaking may backup at mag-edit muna sa draft o staging kung kaya. Isang bagay lang ang baguhin at i-test ang links, larawan, form, at presyo. Magpadala ng preview para sa approval bago mag-publish. Pagkatapos mag-publish, buksan ang live page at itala ang pagbabago. Kapag may nasira, huminto, sabihin sa client, at i-restore ang backup. Huwag mag-install ng plugin mula sa hindi kilalang source.",
    proTips: [
      "Take a before screenshot of every page you edit; it is the fastest proof of what changed.",
      "Check the live page on a phone, since most visitors will see it there.",
    ],
    deepDive: [
      [
        "Know your role",
        "If your role is content, do not touch settings, themes, or plugins. If something needs that, ask the client to involve the person responsible for the site.",
      ],
      [
        "Plan the rollback before you start",
        "Know how to restore the previous version before you change anything. A calm rollback is much better than a rushed fix.",
      ],
    ],
    practiceData:
      "Fictional request: update Saturday pickup to 9–11 AM on the Order page. You have an editor account. The host says daily backups run at 2 AM. The Order page has a form button and a price table. Owner approves by email with a preview link.",
    modelAnswer:
      "The plan confirms the change in writing, uses the editor account, notes the daily 2 AM backup (and a manual page revision as an extra), edits in draft, checks the form button, price table, links, and images on desktop and phone, sends the preview for the owner's email approval, publishes, hard-refreshes the live page to verify, and logs the date and approver. The rollback is restoring the previous page version or the backup, and the client is told if anything breaks.",
  },
  {
    title: "Audit broken links and basic page health",
    goal: "Find and report broken links, missing images, and slow or confusing pages before customers do.",
    prereq: "Quality checklists, SEO hygiene, and reporting lessons.",
    teach:
      "Broken links, missing images, and outdated pages quietly cost a business trust and sales. A regular health audit finds them early. Start with a list of the important pages: the home page, ordering or contact page, pricing, and the pages that bring the most visits. For each page, open it on a phone and a computer and check that it loads, that images appear, that text is readable, and that buttons and forms work. Click every link, including those in menus and footers, and note any that lead to errors, wrong pages, or old offers. Test forms with fictional data where the client allows it, and confirm the confirmation message and where submissions go. Check that prices, dates, hours, and policies match the approved source. Look for pages that load slowly or show a security warning and report them with details. Use free browser tools or the client's approved checker to scan for broken links on larger sites, then review results by hand because tools make mistakes. Record each issue with the page, the problem, the evidence such as a screenshot, the priority, and a suggested fix, and group them by who can fix them. Report issues to the client in a short, ordered list, fix only what is within your role and approval, and recheck after fixes. Schedule the audit monthly and keep the reports to show trends.",
    example:
      "A monthly audit of the fictional bakery's site finds the old holiday banner still linking to a removed page, a menu link that shows an error, and a form that sends no confirmation. The VA reports three issues with screenshots and priorities, fixes the banner with the owner's approval, and asks the web developer to handle the form.",
    steps: [
      "List the important pages and check each on phone and computer.",
      "Click every link and test forms with approved fictional data.",
      "Compare prices, dates, hours, and policies against the approved source.",
      "Record issues with evidence, priority, and a suggested fix.",
      "Report in order, fix what is within your role, recheck, and repeat monthly.",
    ],
    exercise:
      "Audit the practice page list, record the issues with priority and suggested owner, and write the short report to the client.",
    portfolio: "A monthly website health report template with sample findings.",
    mistake:
      "Relying only on an automatic checker misses problems that a human sees, and also flags errors that are not real.",
    question:
      "A checker lists a link as broken but it opens when you click. What do you do?",
    options: [
      "Report it as broken anyway",
      "Delete the link",
      "Verify by hand, note it as a false alarm, and report only real issues",
    ],
    answer: 2,
    explanation:
      "Tools can be wrong. Verify manually and report only confirmed issues so your reports stay credible.",
    ready: [
      "Audit pages on phone and computer",
      "Test links and forms carefully",
      "Record issues with evidence and priority",
      "Verify tool results by hand",
    ],
    tools: "A browser, a broken-link checker, screenshots, and a spreadsheet.",
    taglish:
      "Ang sirang link, nawawalang larawan, at lumang page ay tahimik na nagpapababa ng tiwala at benta. Gumawa ng listahan ng mahahalagang page at buksan ang bawat isa sa phone at computer. I-click ang bawat link kasama ang menu at footer. I-test ang form gamit ang pekeng data kung pinapayagan ng client. Ihambing ang presyo, petsa, oras, at patakaran sa aprubadong source. Itala ang bawat isyu na may page, problema, ebidensya, prayoridad, at mungkahing ayos. I-verify nang mano-mano ang resulta ng tool dahil puwedeng magkamali. Mag-ulat nang maayos at gawin ito buwan-buwan.",
    proTips: [
      "Keep a short list of 'must never break' pages and check them first every month.",
      "Attach one screenshot per issue so the person fixing it does not have to guess.",
    ],
    deepDive: [
      [
        "Prioritize fixes",
        "Anything that blocks an order or shows a wrong price comes first. Cosmetic problems come last. Tell the client which issues cost money today.",
      ],
      [
        "Separate who fixes what",
        "Group issues by who can fix them: you (content), the client (policy or photos), or a developer (forms, security). A clear owner column moves things along.",
      ],
    ],
    practiceData:
      "Fictional site pages: Home (banner links to 'Holiday 2025' page that shows 'Page not found'), Order (form submits but shows no confirmation), Menu (price shows 16; approved price is 18), About (image missing), Contact (phone number correct). Checker flags the Contact map link as broken but it opens.",
    modelAnswer:
      "Issues: wrong price on Menu (16 vs 18) is highest priority and fixable with approval; Order form lacks confirmation (developer or client decision) and is high priority; Home banner links to a removed page (content, quick fix); About image missing (low). The Contact map link is a false alarm after manual check. The report lists issues in priority order with screenshots, owners, and suggested fixes, and the VA rechecks after fixes.",
  },
];

const aiDailyModuleIndex = modules.length;
modules.push([
  "AI tools in daily work",
  "Research, meeting notes, formulas, and a personal AI-use policy, all verified.",
  "Advanced workflow",
  aiDailyLessons,
]);
aiDailyLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${aiDailyModuleIndex}-${index}`,
    mi: aiDailyModuleIndex,
    li: index,
  });
});

const webContentModuleIndex = modules.length;
modules.push([
  "Content and web support",
  "Blog pipeline, honest SEO, safe website updates, and link and page audits.",
  "Specialization",
  webContentLessons,
]);
webContentLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${webContentModuleIndex}-${index}`,
    mi: webContentModuleIndex,
    li: index,
  });
});
