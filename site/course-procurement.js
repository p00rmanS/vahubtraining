/** Procurement, subscription, and inventory support. Append IDs to preserve existing progress. */
const procurementLessons = [
  {
    title: "Compare vendor quotes and prepare purchase requests",
    goal: "Compare quotes fairly, summarize the real cost, and prepare a purchase request the owner can approve in one read.",
    prereq: "Spreadsheet, expense tracking, and decision-summary lessons.",
    teach:
      "Clients often need to buy something: software, equipment, printing, or a service. A VA can save time and money by gathering quotes and presenting them clearly, while the client or approver makes the decision and the purchase. Start with the need: what is required, the budget, the deadline, and who approves. Ask at least two or three vendors for a quote using the same written requirements, so the quotes can be compared fairly. Put the results in one table: vendor, item or plan, price, what is included, delivery or start date, contract length, cancellation terms, and warranty or support. Look beyond the headline price. Add setup fees, shipping, taxes, extra users, and the cost over the full period, such as a year. Check that each quote covers the same things; a cheaper quote that leaves out support is not really cheaper. Check the vendor: reviews from independent sources, a real company address and contact, and clear terms. Never enter payment details on a site you cannot verify, and never pay without written approval. Write a short summary with your neutral comparison, the one or two options that fit, and the questions that remain, then let the approver choose. After approval, prepare the purchase request with the item, vendor, price, quote reference, approval, and delivery details, and file the quotes and the decision together for later reference. Keep price and date notes, because quotes expire.",
    example:
      "A fictional bakery needs a second oven timer and a label printer, budget 300 dollars, needed within two weeks. The VA requests quotes from three suppliers using the same written requirements. One printer costs only 99, but its labels cost 25 per month, so over a year it is the most expensive. She builds a table with the year-one total, flags that one quote expires Friday, and sends the owner a half-page summary with two options and one open question about warranty. The owner approves one, and she files the quotes with the approval.",
    steps: [
      "Write the need, budget, deadline, and approver in one short brief.",
      "Request quotes from several vendors using the same written requirements.",
      "Build one comparison table with the full cost over the period and the terms.",
      "Check vendor legitimacy and expiry dates, then write a neutral summary with open questions.",
      "Prepare the purchase request after written approval and file quotes with the decision.",
    ],
    exercise:
      "Compare three practice quotes in a table with the full year cost, write a half-page neutral summary, and prepare the purchase request.",
    portfolio:
      "A quote comparison table, a one-page recommendation summary, and a purchase request.",
    mistake:
      "Comparing only the headline price can hide fees, shipping, and renewal costs that change which option is cheapest.",
    question:
      "Two quotes differ in price, but one excludes support and shipping. What should you do?",
    options: [
      "Compare the full cost over the period with the same inclusions and note the difference",
      "Pick the lowest headline price",
      "Pay the cheaper one so the deal is not lost",
    ],
    answer: 0,
    explanation:
      "A fair comparison counts all costs and inclusions over the same period. The approver then decides with the full picture.",
    ready: [
      "Collect quotes against the same written requirements",
      "Compare full cost, terms, and expiry dates",
      "Check the vendor before anything is purchased",
      "Wait for written approval before ordering or paying",
    ],
    tools:
      "A spreadsheet, a shared folder for quotes, and the client's approval channel.",
    taglish:
      "Madalas kailangang bumili ang client ng software, gamit, o serbisyo. Puwedeng mangolekta ang VA ng mga quote at ipakita nang malinaw, pero ang client o approver ang magpapasya at bibili. Magsimula sa pangangailangan: ano ang kailangan, budget, deadline, at sino ang nag-aaprub. Humingi ng quote sa dalawa o tatlong vendor gamit ang parehong nakasulat na requirements para patas ang paghahambing. Ilagay sa isang table ang vendor, presyo, kasama sa presyo, petsa ng delivery, haba ng kontrata, cancellation terms, at warranty. Tingnan higit sa headline price: idagdag ang setup fee, shipping, buwis, at dagdag na user, at kuwentahin ang gastos sa buong taon. Siguraduhing pareho ang saklaw ng bawat quote; ang mas mura na walang support ay hindi talaga mas mura. I-check ang vendor sa pamamagitan ng independent na review, totoong address, at malinaw na terms. Huwag maglagay ng payment details sa site na hindi mo ma-verify at huwag magbayad nang walang nakasulat na approval. Sumulat ng maikling neutral na buod na may isa o dalawang angkop na opsyon at ang mga natitirang tanong, tapos hayaang pumili ang approver. Pagkatapos ng approval, ihanda ang purchase request at i-file ang mga quote kasama ang desisyon. Itala ang expiry ng quote.",
    proTips: [
      "Ask every vendor the same three questions in writing, including what happens at renewal; answers are only comparable if the questions are identical.",
      "Add a column called 'cost in year one' and sort by it. It often reorders the list you expected.",
    ],
    deepDive: [
      [
        "Same requirements, fair comparison",
        "Write the requirements once and send the identical text to each vendor. Vendors answer different questions when you ask differently, which makes the quotes impossible to compare. Record the date you asked and the date each reply arrived.",
      ],
      [
        "Total cost, not headline price",
        "Add setup, shipping, taxes, extra users, consumables, and the cost over a full year. Subscription and consumable prices often matter more than the purchase price. Note the cancellation and renewal terms next to the number.",
      ],
      [
        "Your role in the decision",
        "You prepare a neutral comparison and open questions. The approver chooses and, unless told otherwise, the client places the order. If a vendor pressures you to decide today, treat it as a reason to slow down and tell the approver.",
      ],
    ],
    practiceData:
      "Fictional need: a label printer for the bakery, budget 300 dollars, needed in two weeks. Quote A: 120 printer, labels 15 per month, 1-year warranty, delivery 3 days, expires Friday. Quote B: 180 printer, labels 8 per month, 2-year warranty, delivery 5 days, expires next month. Quote C: 99 printer, labels 25 per month, no warranty stated, shipping 15, delivery 10 days. Approver: the owner.",
    modelAnswer:
      "Table of year-one cost: A = 120 + 180 labels = 300; B = 180 + 96 = 276; C = 99 + 15 + 300 = 414, with no stated warranty and the slowest delivery. Flag that A expires Friday. Summary: B is lowest over a year and has the longest warranty; A is fastest to start; C is not recommended because of cost and the missing warranty, but confirm its warranty in writing if the owner wants it considered. Open question: the label size needed. Prepare the purchase request only after the owner approves in writing, and file all three quotes with the decision.",
  },
  {
    title: "Audit subscriptions and manage renewals",
    goal: "Find unused or duplicate subscriptions, track renewal dates, and prevent surprise charges.",
    prereq: "Expense tracking, spreadsheet, and security-basics lessons.",
    teach:
      "Subscriptions quietly add up: software, tools, memberships, and domains renew every month or year, often after the person who signed up has stopped using them. A subscription audit is a simple, careful routine a VA can run each quarter. Start with a list built from evidence: statements and receipts the client shares, the tools list, and the email inbox for receipts. For each item record the name, what it is for, the owner, who uses it, the plan and price, the billing cycle, the renewal date, how to cancel, and where the login is stored. Never put passwords in the sheet; point to the password manager. Review each item with the owner: is it used, is it duplicated by another tool, is a smaller plan enough, and is the renewal date approaching? Sort by renewal date and set reminders at least thirty days before big annual renewals, since cancellation windows can be short. Do not cancel or downgrade anything yourself unless the client has said so in writing; cancelling the wrong tool can delete data or lock the team out. Before any cancellation, check that the data has been exported and that nobody still depends on it. After decisions, record the new status, the savings, and the date, and share a short summary with the totals before and after. Use a shared company login or a client-owned account for subscriptions rather than a personal one, so access does not disappear when someone leaves.",
    example:
      "A fictional bakery pays for two scheduling tools and a stock-photo plan nobody has used in six months. The VA builds the subscription list from statements and receipts, finds the duplicate scheduler, and notes that the photo plan renews in 25 days for 190 dollars. She emails the owner a one-page summary with the renewal dates and a recommendation to review both. The owner says to cancel the photo plan; the VA exports the downloads first, cancels in the owner's account, saves the confirmation, and records 190 dollars saved per year.",
    steps: [
      "Build a list from statements, receipts, and the tools list.",
      "Record price, cycle, renewal date, owner, users, cancellation steps, and where the login lives.",
      "Review each item with the owner for use, duplicates, and smaller plans.",
      "Set renewal reminders at least thirty days ahead for big annual charges.",
      "Act only on written decisions, export data first, and record the savings and confirmations.",
    ],
    exercise:
      "Audit the practice list: record the fields, flag duplicates and upcoming renewals, write the owner summary, and plan one safe cancellation.",
    portfolio:
      "A subscription register with renewal dates and a one-page audit summary with savings.",
    mistake:
      "Cancelling a tool without checking who uses it or exporting its data can delete records or lock the team out.",
    question:
      "A photo plan is unused and renews in 25 days. What is the right next step?",
    options: [
      "Report it to the owner, and cancel only after written approval and exporting the data",
      "Cancel it today to be safe",
      "Let it renew; it is only once a year",
    ],
    answer: 0,
    explanation:
      "Surface the finding with dates and cost, then act on the owner's written decision after protecting the data.",
    ready: [
      "Build the list from evidence, not memory",
      "Record renewal dates and set reminders",
      "Store no passwords in the sheet",
      "Act only on written decisions and keep confirmations",
    ],
    tools: "A spreadsheet, the password manager, and a calendar for reminders.",
    taglish:
      "Tahimik na nag-iipon ang mga subscription: software, membership, at domain na nagre-renew buwan-buwan o taon-taon, kadalasan kahit hindi na ginagamit. Ang subscription audit ay simpleng routine na puwedeng gawin ng VA kada quarter. Magsimula sa listahang may ebidensya: statement, resibo, at email ng mga resibo. Itala ang pangalan, gamit, owner, mga gumagamit, plan at presyo, billing cycle, petsa ng renewal, paano mag-cancel, at kung nasaan ang login. Huwag maglagay ng password sa sheet; ituro ang password manager. I-review kasama ang owner: ginagamit ba, may kapareho bang tool, sapat ba ang mas maliit na plan, at malapit na ba ang renewal. I-sort ayon sa petsa ng renewal at magtakda ng paalala nang hindi bababa sa tatlumpung araw bago ang malalaking taunang renewal, dahil maikli minsan ang cancellation window. Huwag mag-cancel o mag-downgrade nang walang nakasulat na utos ng client; puwedeng mawala ang data o ma-lock out ang team. Bago mag-cancel, i-export ang data at tiyaking walang umaasa pa rito. Pagkatapos, itala ang bagong status, ang natipid, at ang petsa, at magbahagi ng maikling buod ng kabuuan. Gumamit ng shared o client-owned na account, hindi personal, para hindi mawala ang access kapag umalis ang isang tao.",
    proTips: [
      "Put a 'last used' column in the register. A tool with no use in ninety days is the strongest candidate to question.",
      "Create the reminder for cancellation deadlines, not just renewal dates; many plans need notice days before the charge.",
    ],
    deepDive: [
      [
        "Build from evidence",
        "Start with statements, receipts, and the inbox rather than asking people what they pay for. Memory misses small charges, annual plans, and tools someone started on a personal card. Mark every item as confirmed or unconfirmed.",
      ],
      [
        "Review with the owner",
        "Ask four questions per item: is it used, does another tool do the same job, is a smaller plan enough, and what breaks if it stops. Record the owner's answer in writing next to the item so decisions are traceable.",
      ],
      [
        "Cancel safely",
        "Export data first, check who depends on the tool, use the client's own account, and save the confirmation email. Some plans refund nothing after renewal, so the reminder date matters. Update the register the same day.",
      ],
    ],
    practiceData:
      "Fictional register: Scheduler A 20 per month, used daily; Scheduler B 18 per month, used by nobody since March; Photo plan 190 per year renewing in 25 days, last used 6 months ago; Domain 15 per year renewing in 4 months; Email tool 30 per month, used weekly. The owner has not yet decided anything.",
    modelAnswer:
      "Register all five with owner, cycle, renewal date, and login location (no passwords). Flag Scheduler B (216 per year) as a duplicate with no use since March, and the Photo plan (190 per year) renewing in 25 days. Send the owner a summary with total annual spend, the two flagged items, the renewal dates, and the question whether to cancel. Set reminders 30 days ahead for the photo plan and domain. Act only after written approval; export downloads first, cancel in the owner's account, save the confirmation, and record the savings.",
  },
  {
    title: "Track supplies and equipment with reorder points",
    goal: "Keep a simple inventory of supplies and equipment, set reorder points, and prevent stockouts and overbuying.",
    prereq: "Spreadsheet, vendor quote, and recurring task lessons.",
    teach:
      "Small businesses and home offices run out of important things at the worst moment, or buy too much of what they do not need. A VA can keep a light inventory without special software. Start by deciding what is tracked: supplies that run out, such as packaging, labels, and printer paper, and equipment that must be accounted for, such as laptops and cameras. Use a sheet with one row per item: name, location, unit, quantity on hand, reorder point, preferred vendor, usual order quantity, lead time in days, last order date, and the owner of the item. The reorder point is the quantity at which you order again, and a simple way to set it is the usual weekly use times the lead time in weeks, plus a small safety buffer. Count the stock on a schedule, such as the last Friday of the month, and compare the count to the sheet; record differences and the reason if known instead of quietly fixing numbers. For equipment, record the serial number, who has it, the purchase date, and the warranty end, and log when it moves. Each time you update, produce a short list of items at or below the reorder point and send it with the suggested quantity and a link to the vendor; the client approves the order. Avoid recording anything sensitive, such as personal details or access codes, in the inventory. Review slow items every quarter and mention anything unused so the client can stop buying it. Keep the sheet simple enough that someone else could take over in ten minutes.",
    example:
      "The fictional bakery uses about 20 boxes a week, the supplier takes 7 days, and the owner wants a small buffer. The VA sets the reorder point at 40 boxes and adds a 10 box buffer. During the monthly count on Friday, the sheet says 55 boxes but the shelf has 38, so she records the 17 box difference as 'unexplained, possible damaged stock' and does not edit history. She sends the owner a reorder list with a suggested quantity and vendor link, and the owner approves it.",
    steps: [
      "Decide which supplies and equipment are tracked and create one row per item.",
      "Record quantity, reorder point, vendor, usual order quantity, and lead time.",
      "Count on a fixed schedule and log differences with reasons instead of quietly correcting them.",
      "Send the owner a short reorder list with suggested quantities and vendor links.",
      "Review slow-moving items and equipment records every quarter.",
    ],
    exercise:
      "Build the practice inventory sheet, set a reorder point with the formula, log a count difference, and write the reorder list.",
    portfolio:
      "An inventory sheet with reorder points and a sample monthly reorder message.",
    mistake:
      "Overwriting the count to match the sheet hides losses and breakage that the owner needs to know about.",
    question:
      "A monthly count shows 38 boxes but the sheet says 55. What should you do?",
    options: [
      "Record the difference and reason, update the quantity, and tell the owner",
      "Change the sheet silently so it matches",
      "Ignore it until next month",
    ],
    answer: 0,
    explanation:
      "Differences are information. Recording them keeps the history honest and lets the owner find causes such as damage or theft.",
    ready: [
      "Track only what matters, one row per item",
      "Set reorder points from use and lead time",
      "Count on a schedule and log differences",
      "Send reorder lists for approval",
    ],
    tools: "A spreadsheet, a monthly reminder, and the vendor links.",
    taglish:
      "Madalas maubusan ang maliliit na negosyo ng mahahalagang gamit sa maling oras, o bumibili ng sobra. Puwedeng magtago ang VA ng magaan na inventory sa spreadsheet. Piliin muna kung ano ang itatala: mga supply na nauubos tulad ng packaging, label, at papel, at mga kagamitang dapat mabilang tulad ng laptop at camera. Gumamit ng sheet na may isang row bawat item: pangalan, lokasyon, unit, dami, reorder point, vendor, karaniwang order quantity, lead time sa araw, huling order, at may-ari. Ang reorder point ay ang dami kung kailan oorder muli; simpleng paraan ang lingguhang gamit na i-multiply sa lead time sa linggo, dagdag ng maliit na buffer. Magbilang sa takdang iskedyul, tulad ng huling Biyernes ng buwan, at ihambing sa sheet; itala ang pagkakaiba at dahilan sa halip na tahimik na ayusin ang numero. Para sa kagamitan, itala ang serial number, kung sino ang may hawak, petsa ng pagbili, at katapusan ng warranty, at i-log kapag inilipat. Pagkatapos mag-update, magpadala ng maikling listahan ng mga item sa o mas mababa sa reorder point na may mungkahing dami at link ng vendor; ang client ang nag-aaprub ng order. Huwag maglagay ng sensitibong detalye o access code sa inventory. Kada quarter, i-review ang mabagal na item at sabihin ang hindi na ginagamit. Panatilihing simple para maipasa sa iba sa sampung minuto.",
    proTips: [
      "Photograph the shelf at every count and save it with the date. A picture settles questions about what was really there.",
      "Add a 'why it matters' column for critical items. It makes owners approve a reorder faster than a bare number does.",
    ],
    deepDive: [
      [
        "Choose what to track",
        "Track what causes real trouble when it runs out or goes missing, and ignore the rest. A short, accurate list gets used; a long one gets abandoned. Group items by location so counting is quick.",
      ],
      [
        "Set reorder points with a simple rule",
        "Weekly use times lead time in weeks, plus a buffer, gives a starting reorder point. Adjust after a few months of real data and before seasonal peaks. Write down the reasoning so the number can be changed later without guessing.",
      ],
      [
        "Counts, differences, and equipment",
        "Count on a fixed day and record every difference with a note. For equipment keep serial numbers, who holds each item, purchase date, and warranty end. Store no passwords or personal data in the sheet.",
      ],
    ],
    practiceData:
      "Fictional item: cookie boxes, used about 20 per week, supplier lead time 7 days, buffer 10 boxes, usual order 200 boxes. Monthly count: sheet says 55, shelf shows 38. Other items: printer labels (4 rolls, reorder at 3), packing tape (12 rolls, reorder at 6), a camera (serial 4471, with the owner, warranty ends in March).",
    modelAnswer:
      "Reorder point = 20 per week times 1 week of lead time, plus 10 buffer = 30 boxes. Record the 17 box difference as unexplained with a note, update the quantity to 38, add a dated photo, and tell the owner. Because 38 is above the reorder point, it is not yet a reorder; the next count or weekly check should flag it. The reorder list for labels and tape: labels are close to the reorder point of 3 (4 on hand), so list them as 'watch'. Camera row: serial 4471, holder owner, warranty end March, with a reminder two months before.",
  },
];

const procurementModuleIndex = modules.length;
modules.push([
  "Procurement and inventory support",
  "Compare quotes, audit subscriptions, and keep supplies stocked without overbuying.",
  "Advanced workflow",
  procurementLessons,
]);
procurementLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${procurementModuleIndex}-${index}`,
    mi: procurementModuleIndex,
    li: index,
  });
});
