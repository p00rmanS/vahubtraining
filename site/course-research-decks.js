/** Research briefs, presentation decks, and accessible documents. Append IDs to preserve existing progress. */
const researchDeckLessons = [
  {
    title: "Write a competitor and market research brief",
    goal: "Collect public information about competitors and turn it into a short, sourced brief the client can act on.",
    prereq:
      "Research with AI, source verification, and summary-writing lessons.",
    teach:
      "Clients often ask what competitors charge, how they present themselves, or whether a market is worth entering. A VA can gather public information and organize it, while the client draws the strategy. Start with the question: what decision will this research support, what is the deadline, and how many competitors are enough. Set the scope in writing, such as five competitors, public information only, and a half-page summary. Use public sources only: the company's website, public price lists, public reviews, social posts, press releases, and public registries. Never pretend to be a customer to get private information, never use someone's login, and never copy private documents. For each competitor record the same fields: what they sell, price or price range, who they target, strengths and weaknesses mentioned by customers, how they promote, and the source link with the date you saw it. Prices and pages change, so the date matters. Keep facts separate from your interpretation: write 'their basic plan is listed at 29 dollars per month (page seen on the 3rd)' for a fact, and label opinions as such. When sources disagree, say so instead of picking one quietly. Summarize in a one-page brief with the question at the top, a comparison table, three to five findings, gaps in the data, and suggested next questions. Do not copy long text from other sites; summarize in your own words and link the source. Share the brief with the sources attached so the client can check any claim.",
    example:
      "A fictional bakery wants to know what nearby bakeries charge for custom cakes. The VA picks five competitors, records public prices from their websites with the date, and notes that one lists 'from 45' without a size. She puts facts in a table, marks the unclear item as 'needs confirmation', and writes three findings: prices cluster between 40 and 60, two offer same-day pickup, and one has many reviews about late delivery. She sends the one-page brief with all links and suggests two follow-up questions.",
    steps: [
      "Clarify the decision, deadline, and scope in writing.",
      "Use public sources only and record the same fields for each competitor.",
      "Note the source link and date next to every fact.",
      "Separate facts from interpretation and flag conflicts or gaps.",
      "Write a one-page brief with a table, findings, gaps, and next questions.",
    ],
    exercise:
      "Research three practice competitors using the provided notes, fill the comparison table with sources and dates, and write the one-page brief with gaps.",
    portfolio:
      "A sourced competitor comparison table and a one-page research brief.",
    mistake:
      "Mixing facts and opinions, or leaving out dates and sources, makes the brief impossible to check and unsafe to base a decision on.",
    question:
      "A competitor's page lists a price 'from 45' without saying for what size. What should you do?",
    options: [
      "Record it as stated, mark it as needing confirmation, and note the date and link",
      "Assume it is the standard size and enter 45",
      "Leave the competitor out",
    ],
    answer: 0,
    explanation:
      "Report what the source says and flag uncertainty. The client can then decide whether to confirm it.",
    ready: [
      "Define the decision and scope",
      "Use only public sources and record dates",
      "Separate facts from interpretation",
      "Deliver a short sourced brief with gaps listed",
    ],
    tools:
      "A spreadsheet, a browser, a notes document, and the client's shared folder.",
    taglish:
      "Madalas itanong ng client kung magkano ang singil ng kakumpitensya o sulit bang pasukin ang isang market. Puwedeng mangolekta at mag-ayos ng impormasyon ang VA, pero ang client ang gagawa ng estratehiya. Magsimula sa tanong: anong desisyon ang susuportahan, kailan ang deadline, at ilang kakumpitensya ang sapat. Isulat ang saklaw, halimbawa limang kakumpitensya, public information lang, at kalahating-pahinang buod. Public sources lang: website, public price list, public review, social post, press release, at public registry. Huwag magpanggap na customer para makakuha ng pribadong impormasyon, huwag gumamit ng login ng iba, at huwag kopyahin ang pribadong dokumento. Para sa bawat kakumpitensya, itala ang parehong field: ano ang ibinebenta, presyo, target na customer, lakas at kahinaan ayon sa customer, paano nagpo-promote, at link ng source na may petsa kung kailan mo nakita. Nagbabago ang presyo at pahina, kaya mahalaga ang petsa. Ihiwalay ang katotohanan sa interpretasyon. Kapag nagkakasalungat ang source, sabihin ito. Ibuod sa isang pahina: tanong sa itaas, comparison table, tatlo hanggang limang findings, kulang na data, at mungkahing susunod na tanong. Huwag kopyahin ang mahabang teksto ng ibang site; ibuod sa sarili mong salita at ilagay ang link. Ibahagi ang brief kasama ang mga source para ma-check ng client ang anumang claim.",
    proTips: [
      "Take a dated screenshot of each price page and save it in the project folder. Pages change, and the screenshot proves what you saw.",
      "End every brief with a 'what I could not find' list. It shows the client exactly where the data is thin.",
    ],
    deepDive: [
      [
        "Scope before searching",
        "Write the question, the number of competitors, the allowed sources, and the deadline before you open a browser. Without scope, research expands forever and the client receives a pile of links instead of an answer.",
      ],
      [
        "Public sources, honest methods",
        "Use only what anyone can see: websites, public listings, public reviews, and registries. Do not pose as a customer, use borrowed logins, or copy private documents. If the only way to learn something is deception, report it as unknown.",
      ],
      [
        "Facts, interpretation, and gaps",
        "Write each fact with its source and date, then keep your interpretation in a separate section. When sources conflict, show both. A short list of gaps and suggested follow-up questions is as useful as the findings.",
      ],
    ],
    practiceData:
      "Fictional question: what do nearby bakeries charge for custom cakes? Notes: Bakery A lists 'from 45' (no size), same-day pickup, page seen on the 3rd. Bakery B lists 6-inch cake 52, 8-inch 64, many reviews mention friendly staff. Bakery C lists 6-inch cake 40, reviews mention late deliveries in three posts. Scope: three competitors, public information only, one-page brief.",
    modelAnswer:
      "Table with name, offer, price, target, review themes, source link, and date seen. Bakery A: 'from 45', size not stated, needs confirmation. Bakery B: 52 for 6 inch and 64 for 8 inch. Bakery C: 40 for 6 inch. Findings: stated prices for a 6 inch cake range from 40 to 52; A offers same-day pickup; C has three review posts about late delivery. Gaps: A's size, whether prices include decoration. Next questions: which size the client's customers usually order, and whether same-day pickup is worth offering. Attach the links and dates.",
  },
  {
    title: "Turn notes into a clear slide deck",
    goal: "Convert rough notes into a short, readable deck with one message per slide and consistent design.",
    prereq: "Document formatting, brand assets, and summary-writing lessons.",
    teach:
      "Slide decks are a common request: a client pitch, a team update, a training session, or a monthly report. A VA can turn rough notes into a clear deck, as long as the client confirms the message and facts. Start with the audience and the purpose: who will see it, how long will it be presented, and what should they understand or decide afterward. Write the message of the whole deck in one sentence, then give each slide one message, stated in the title as a sentence such as 'Orders grew 18 percent in October' rather than the label 'Orders'. Plan the order before designing: opening, the main points, the evidence, and a final slide with the decision or next step. Keep the text short; if a slide needs a paragraph, it belongs in a handout or the speaker notes. Use the client's template and brand colors, one or two fonts, and consistent alignment and spacing. Make text large enough to read from the back of a room, use strong contrast, and avoid color alone to carry meaning. Charts need a title that states the point, labeled axes, and a source. Check every number against the approved source and ensure that no private information, such as customer names or internal comments, remains in the slides, notes, or file properties. Add alt text to important images. Export a PDF for sharing and keep the editable file, and send the draft for written approval with a list of anything you could not confirm.",
    example:
      "A fictional bakery owner sends bullet notes for a lender meeting. The VA writes the one-sentence message, 'Sales are growing and a second oven pays back in 14 months', and builds seven slides, each with a sentence title. A chart of monthly sales has a labeled axis and a source note. She cuts a dense slide into two, moves detail to speaker notes, checks every figure against the sales sheet, removes a customer's name from a screenshot, and sends the draft with one question about the payback assumption.",
    steps: [
      "Confirm the audience, length, and purpose, and write the whole-deck message in one sentence.",
      "Plan the slide order with a sentence title for each slide.",
      "Build with the client's template, short text, readable sizes, and strong contrast.",
      "Check every number and remove private information from slides, notes, and file properties.",
      "Export a PDF, keep the editable file, and send for written approval with open questions.",
    ],
    exercise:
      "Turn the practice notes into a seven-slide outline with sentence titles, one chart description, and a list of facts to verify.",
    portfolio:
      "A short deck or outline with sentence titles, a clean chart, and a verification note.",
    mistake:
      "Putting every detail on the slides makes the audience read instead of listen and hides the one point that matters.",
    question: "A slide has a full paragraph of text. What is the best fix?",
    options: [
      "Cut it to the one key message in the title and move detail to speaker notes or a handout",
      "Shrink the font so it all fits",
      "Leave it; accuracy matters more than readability",
    ],
    answer: 0,
    explanation:
      "One message per slide keeps the audience focused. Detail belongs in notes or a handout.",
    ready: [
      "Confirm audience, purpose, and message",
      "Use sentence titles and one point per slide",
      "Verify numbers and remove private information",
      "Share a PDF and keep the editable file",
    ],
    tools:
      "Slides software, the client's brand template, and a spreadsheet for figures.",
    taglish:
      "Karaniwang hiling ang slide deck: pitch sa client, update ng team, training, o buwanang report. Puwedeng gawing malinaw na deck ng VA ang magulong notes, basta kinukumpirma ng client ang mensahe at mga datos. Magsimula sa audience at layunin: sino ang makakakita, gaano katagal ang presentasyon, at ano ang dapat nilang maintindihan o ipasya. Isulat ang mensahe ng buong deck sa isang pangungusap, at bigyan ng isang mensahe ang bawat slide na nakasulat bilang pangungusap sa title, tulad ng 'Tumaas ng 18 porsiyento ang orders noong Oktubre' sa halip na 'Orders'. Planuhin muna ang ayos: pambungad, pangunahing punto, ebidensya, at huling slide na may desisyon o susunod na hakbang. Panatilihing maikli ang teksto; kung kailangan ng slide ng talata, ilagay sa handout o speaker notes. Gamitin ang template at kulay ng brand ng client, isa o dalawang font, at pare-parehong ayos. Dapat mabasa ang laki ng teksto mula sa likod ng kuwarto, malakas ang contrast, at huwag umasa sa kulay lang. May title na nagsasabi ng punto, may label ang axis, at may source ang chart. I-check ang bawat numero laban sa aprubadong source at alisin ang pribadong impormasyon sa slides, notes, at file properties. Maglagay ng alt text sa mahahalagang larawan. Mag-export ng PDF at itago ang editable na file, at ipadala ang draft para sa nakasulat na approval kasama ang mga hindi mo makumpirma.",
    proTips: [
      "Read only the slide titles in order. If they do not tell the story, rewrite them before touching the design.",
      "Check file properties and speaker notes before sending. Old author names and draft comments often hide there.",
    ],
    deepDive: [
      [
        "Message first, design second",
        "Write the single sentence the audience should remember, then give each slide a sentence title that supports it. A reader skimming only the titles should still understand the story. Design only after the story works.",
      ],
      [
        "Readable by everyone",
        "Use large type, strong contrast, and short lines. Do not carry meaning with color alone, and give important images alt text. A chart needs a title that states its point, labeled axes, and a source note.",
      ],
      [
        "Checks before sending",
        "Verify every number against the approved source. Remove private names, internal comments, and hidden notes, and check file properties. Send a PDF to viewers and keep the editable file, with a short list of what you could not confirm.",
      ],
    ],
    practiceData:
      "Fictional notes for a lender meeting: sales grew from 8,200 in August to 9,700 in October (+18 percent); a second oven costs 6,000 and adds about 430 extra monthly profit; payback about 14 months; busiest days Friday and Saturday; one screenshot shows a customer name; the owner has not confirmed the profit estimate.",
    modelAnswer:
      "Message: Sales are growing and a second oven pays back in about 14 months. Outline: 1 Title; 2 Sales grew 18 percent in three months (chart, axis labeled, source: sales sheet); 3 Friday and Saturday are the busiest days; 4 The oven adds about 430 profit per month; 5 Payback is about 14 months (6,000 divided by 430); 6 Risks and assumptions; 7 Request and next step. Verify 8,200 to 9,700 is 18 percent and the profit estimate with the owner. Remove the customer name from the screenshot, move detail to notes, and check file properties.",
  },
  {
    title: "Make documents accessible and easy to read",
    goal: "Create documents, emails, and pages that people with different abilities and devices can read and use.",
    prereq: "Document formatting, email writing, and quality-check lessons.",
    teach:
      "Accessible documents work for people who use screen readers, have low vision, color blindness, dyslexia, or small phone screens, and they are also simply easier for everyone. A VA who formats well makes the client look professional and avoids excluding customers. Start with structure: use real headings in order instead of just making text bold, real bullet and numbered lists, and short paragraphs. Screen readers use headings to navigate, so a heading style matters more than a larger font. Write clear text: plain words, short sentences, and a clear first line. Make links descriptive, such as 'Download the price list' rather than 'click here', and never paste a long raw link into the middle of a sentence when a clear label works. Choose readable fonts at a comfortable size, avoid long blocks in capital letters, and keep enough space between lines. Use strong contrast between text and background, such as dark text on a light background, and do not use color alone to show meaning; add a word or symbol too. Give meaningful images alt text that says what the image is for, and mark purely decorative images as decorative. Tables should have a header row and be used for data, not for layout. For videos, offer captions and a transcript. Check a PDF has real text and not just a picture of text. Use built-in accessibility checkers, then test by tabbing through the document and viewing it on a phone. If the client does not know the standard they need, ask rather than guess, because some customers and regions require specific standards.",
    example:
      "The fictional bakery's price list is a PDF made from a photo of a printed page. The VA rebuilds it as a real document with a heading for each category, a table with a header row, and descriptive links. The red 'sold out' labels also get the words 'sold out'. The logo gets alt text, and the decorative border is marked decorative. She runs the accessibility checker, tests on her phone, and exports a tagged PDF with real text.",
    steps: [
      "Use real headings, lists, and short paragraphs instead of manual formatting.",
      "Write plain, clear text with descriptive link labels.",
      "Check contrast, font size, and that meaning never depends on color alone.",
      "Add alt text to meaningful images and header rows to tables.",
      "Run the accessibility checker, test on a phone, and export a PDF with real text.",
    ],
    exercise:
      "Fix the practice flyer: restructure the headings, rewrite two links, add alt text for two images, and note the contrast and color problems.",
    portfolio:
      "A before-and-after accessible document with a short checklist of fixes.",
    mistake:
      "Using bold and large text instead of real heading styles looks fine but gives screen reader users no way to navigate the document.",
    question: "Which link label is best for accessibility?",
    options: [
      "Download the price list (PDF)",
      "Click here",
      "https://example.com/files/pl-final-v7.pdf",
    ],
    answer: 0,
    explanation:
      "A descriptive label tells every reader, including screen reader users, where the link goes.",
    ready: [
      "Use real headings, lists, and table headers",
      "Write plain text with descriptive links",
      "Check contrast and non-color cues",
      "Add alt text and run the accessibility checker",
    ],
    tools:
      "A document editor with an accessibility checker, a PDF tool, and a phone for testing.",
    taglish:
      "Gumagana ang accessible na dokumento para sa taong gumagamit ng screen reader, may mahinang paningin, color blindness, dyslexia, o maliit na screen ng phone, at mas madali rin ito para sa lahat. Ang VA na marunong mag-format ay nagpapaganda ng imahe ng client at hindi nakakalimutan ang ibang customer. Magsimula sa istruktura: gumamit ng totoong heading na sunod-sunod, hindi lang bold na teksto, at totoong bullet at numbered list, at maiikling talata. Ginagamit ng screen reader ang heading para mag-navigate, kaya mas mahalaga ang heading style kaysa malaking font. Sumulat nang malinaw: simpleng salita, maikling pangungusap, at malinaw na unang linya. Gawing deskriptibo ang link, tulad ng 'I-download ang price list' sa halip na 'click here'. Pumili ng madaling basahing font sa komportableng laki, iwasan ang mahabang bloke ng malalaking titik, at maglagay ng sapat na espasyo sa pagitan ng linya. Gumamit ng malakas na contrast, at huwag umasa sa kulay lang para sa kahulugan; magdagdag ng salita o simbolo. Bigyan ng alt text ang mahahalagang larawan at markahang decorative ang pampalamuti lang. Ang table ay dapat may header row at para sa data, hindi para sa layout. Sa video, magbigay ng caption at transcript. Tiyaking totoong teksto ang PDF at hindi larawan ng teksto. Gamitin ang built-in na accessibility checker at subukan sa phone. Kung hindi alam ng client ang kailangang standard, magtanong sa halip na manghula.",
    proTips: [
      "Tab through the finished document with the keyboard only. If you get lost or stuck, a screen reader user will too.",
      "Write the alt text for what the image does in the document, not for every pixel. Two short sentences are usually enough.",
    ],
    deepDive: [
      [
        "Structure carries meaning",
        "Heading styles, real lists, and table header rows tell assistive technology how the page is organized. Bold text that only looks like a heading is invisible to it. Build the structure first, then adjust the look with styles.",
      ],
      [
        "Clear to read and to see",
        "Use plain words, short sentences, comfortable font size, and strong contrast. Never let color be the only signal; add words or icons. Descriptive links and alt text help everyone, including people on slow connections or small screens.",
      ],
      [
        "Test before you send",
        "Run the built-in checker, tab through with the keyboard, and open the file on a phone. Confirm a PDF has selectable text. If the client must meet a specific standard, ask which one instead of assuming.",
      ],
    ],
    practiceData:
      "Fictional flyer: title is bold 20 point text, not a heading; a link says 'click here'; the logo and a photo of a cake have no alt text; 'sold out' is shown only with red text; the price list is an image inside a PDF; light gray text on white for opening hours.",
    modelAnswer:
      "Apply real Heading 1 and Heading 2 styles. Replace the link with 'Download the price list (PDF)'. Alt text: 'Sweet Corner Bakery logo' and 'Chocolate cake with strawberries' (or mark purely decorative images as decorative). Add the words 'sold out' next to the red label. Rebuild the price list as a real table with a header row and export a PDF with selectable text. Darken the gray opening hours to meet strong contrast. Run the accessibility checker, tab through with the keyboard, and view on a phone.",
  },
];

const researchDeckModuleIndex = modules.length;
modules.push([
  "Research, decks, and accessible documents",
  "Sourced research briefs, clear slide decks, and documents everyone can read.",
  "Advanced workflow",
  researchDeckLessons,
]);
researchDeckLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${researchDeckModuleIndex}-${index}`,
    mi: researchDeckModuleIndex,
    li: index,
  });
});
