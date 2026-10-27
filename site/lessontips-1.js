// One real-life tip per lesson: [English, Taglish]. Part 1: chapters 1 to 9.
const lessonTips = {};
Object.assign(lessonTips, {
  "0-0": [
    "When a stranger asks what you do, answer with a result, not a job title: 'I keep small shops' orders and inboxes organized.' People remember results.",
    'Kapag may nagtanong kung ano ang ginagawa mo, sagutin ng resulta, hindi ng titulo: "Inaayos ko ang orders at inbox ng maliliit na tindahan." Natatandaan ng tao ang resulta.',
  ],
  "0-1": [
    "Do a test call with a friend before your first client call. Most embarrassing first impressions are a muted mic or a missing upload, and both are fixable in five minutes.",
    "Mag-test call muna kasama ang kaibigan bago ang unang client call. Karamihan ng nakakahiyang unang impresyon ay naka-mute na mic o hindi na-upload na file, at maaayos ito sa limang minuto.",
  ],
  "0-2": [
    "Message two local business owners and ask what they dislike doing each week. Their answers often show a service you can offer better than any online list.",
    "Magtanong sa dalawang may-ari ng lokal na negosyo kung ano ang ayaw nilang gawin kada linggo. Madalas, ang sagot nila ang nagpapakita ng serbisyong puwede mong ialok.",
  ],
  "1-0": [
    "Before you send any link, open it in a private window. If you see 'Request access', the client will see it too, and you will lose half a day.",
    'Bago magpadala ng link, buksan ito sa private window. Kung lumabas ang "Request access", makikita rin iyon ng client at mawawalan ka ng kalahating araw.',
  ],
  "1-1": [
    "Write the deadline in the subject line for requests that need an answer, such as 'Reply by Thu 3 PM: menu approval'. It gets opened first.",
    'Isulat ang deadline sa subject line ng mga kailangan ng sagot, tulad ng "Sagot bago Thu 3 PM: menu approval". Ito ang unang binubuksan.',
  ],
  "1-2": [
    "Freeze the header row and sort a copy, never the original. One accidental sort of a single column has scrambled more real sheets than any formula.",
    "I-freeze ang header row at mag-sort sa kopya, hindi sa orihinal. Mas maraming sheet ang nasira ng aksidenteng pag-sort ng isang column kaysa ng anumang formula.",
  ],
  "1-3": [
    "Set up your password manager before your first client, not after. Moving fifty passwords later is painful, and clients notice when you ask them to share one over chat.",
    "I-set up ang password manager bago ang unang client, hindi pagkatapos. Mahirap ilipat ang limampung password mamaya, at napapansin ng client kapag humihingi ka ng password sa chat.",
  ],
  "2-0": [
    "Ask the client for five real examples of 'urgent' from their last month. The examples teach you more than any definition.",
    'Humingi sa client ng limang totoong halimbawa ng "urgent" mula sa nakaraang buwan. Mas marami kang matututunan sa halimbawa kaysa sa depinisyon.',
  ],
  "2-1": [
    "Keep a folder of your best replies and the situations they solved. In a busy hour, adapting a proven reply is faster and safer than writing from scratch.",
    "Magtago ng folder ng pinakamahusay mong reply at kung anong sitwasyon ang nalutas nito. Sa abalang oras, mas mabilis at mas ligtas ang pag-angkop ng subok nang reply.",
  ],
  "2-2": [
    "Send minutes the same afternoon, even if short. A three-line summary sent today beats a perfect page sent next week, because people still remember what they agreed.",
    "Ipadala ang minutes sa parehong hapon, kahit maikli. Mas mabuti ang tatlong linyang buod ngayon kaysa sa perpektong pahina sa susunod na linggo, dahil sariwa pa ang napagkasunduan.",
  ],
  "3-0": [
    "Look at your design on your phone at arm's length. If you cannot read the main message in two seconds, shorten the text.",
    "Tingnan ang disenyo sa phone sa haba ng braso. Kung hindi mo mabasa ang pangunahing mensahe sa loob ng dalawang segundo, paikliin ang teksto.",
  ],
  "3-1": [
    "Before merging two customer records, take a screenshot of both. If the merge was wrong, that screenshot is your fastest way back.",
    "Bago pagsamahin ang dalawang customer record, kunan ng screenshot ang pareho. Kung mali ang pagsasama, iyon ang pinakamabilis mong pabalik.",
  ],
  "3-2": [
    "On a brief for a busy leader, put the one decision they must make in bold at the top. People skim; make the skim land on the ask.",
    "Sa brief para sa abalang lider, ilagay sa bold sa itaas ang nag-iisang desisyong kailangan niya. Sumusulyap lang ang tao; ilagay ang hiling kung saan sila titingin.",
  ],
  "4-0": [
    "Keep a notes file called 'prompts that worked' with what each is good for. In three months it becomes a personal toolbox.",
    'Magtago ng notes file na "prompts na gumana" at kung saan ito mahusay. Sa loob ng tatlong buwan, magiging sarili mong toolbox ito.',
  ],
  "4-1": [
    "Verify the surprising parts first. The claim that sounds too good, too neat, or too convenient is the one most likely to be invented.",
    "Unahing i-verify ang nakakagulat na bahagi. Ang claim na masyadong maganda, masyadong maayos, o masyadong kombinyente ang malamang na imbento.",
  ],
  "5-0": [
    "Ask one friend to open your portfolio link on a phone and tell you what you do in one sentence. If they cannot, your first screen needs rewriting.",
    "Ipabukas sa kaibigan ang portfolio link sa phone at ipasabi kung ano ang ginagawa mo sa isang pangungusap. Kung hindi niya masabi, isulat muli ang unang screen mo.",
  ],
  "5-1": [
    "Reply to the exact question in a job post first, then add your pitch. Proposals that ignore the instructions are usually the first to be discarded.",
    "Sagutin muna ang eksaktong tanong sa job post bago idagdag ang pitch mo. Ang proposal na hindi sumusunod sa tagubilin ang kadalasang unang itinatapon.",
  ],
  "6-0": [
    "End every onboarding call by saying, 'Let me repeat what I will do first, and by when.' Fixing a misunderstanding on the call costs one minute; later it costs a week.",
    'Tapusin ang bawat onboarding call sa "Uulitin ko kung ano ang unang gagawin ko at kailan." Isang minuto lang ang ayos habang nasa call; mamaya, isang linggo.',
  ],
  "6-1": [
    "Run your delivery checklist on a different day than you did the work when possible. Fresh eyes catch what tired eyes skip.",
    "Patakbuhin ang delivery checklist sa ibang araw kaysa sa paggawa kung kaya. Nakikita ng sariwang mata ang nalalampasan ng pagod na mata.",
  ],
  "7-0": [
    "Hand your SOP to someone who has never done the task and stay silent while they try. Every question they ask is a missing line in your document.",
    "Ibigay ang SOP sa taong hindi pa nakagagawa ng task at manahimik habang sinusubukan niya. Bawat tanong niya ay kulang na linya sa dokumento mo.",
  ],
  "7-1": [
    "Leave one afternoon a week with no client commitments. It becomes the slack that absorbs surprises, and the first sign you are overbooked is when it disappears.",
    "Mag-iwan ng isang hapon kada linggo na walang commitment sa client. Ito ang sumasalo ng sorpresa, at ang pagkawala nito ang unang senyales na sobra na ang trabaho mo.",
  ],
  "8-0": [
    "Before you trust a formula, change one input on purpose and see whether the result moves the way you predicted. A formula that does not react is a formula that is broken.",
    "Bago pagkatiwalaan ang formula, sadyang baguhin ang isang input at tingnan kung gumagalaw ang resulta ayon sa hula mo. Ang formulang hindi tumutugon ay sira.",
  ],
  "8-1": [
    "Make the dropdown list from a separate tab so you can fix typos in one place. Typing allowed values by hand into every rule invites mistakes.",
    "Gawin ang dropdown list mula sa hiwalay na tab para sa isang lugar lang aayusin ang typo. Ang mano-manong pag-type ng allowed values sa bawat rule ay nag-aanyaya ng mali.",
  ],
  "8-2": [
    "Show last period next to this period in every report. A number alone invites arguments; a comparison invites decisions.",
    "Ipakita ang nakaraang panahon sa tabi ng kasalukuyan sa bawat report. Ang numerong mag-isa ay nag-aanyaya ng pagtatalo; ang paghahambing ay nag-aanyaya ng desisyon.",
  ],
  "8-3": [
    "Call or message one supplier to confirm the single fact your whole comparison depends on. Ten minutes of confirming can save the client a costly mistake.",
    "Kontakin ang isang supplier para kumpirmahin ang nag-iisang fact na pinagbabatayan ng buong paghahambing. Sampung minutong pagkumpirma ay puwedeng magligtas sa client sa magastos na mali.",
  ],
  "9-0": [
    "Reply to a vague request with a tiny example: 'Is this the kind of folder structure you mean?' People answer a picture faster than a question.",
    'Sagutin ang malabong request ng maliit na halimbawa: "Ganito ba ang istruktura ng folder na gusto ninyo?" Mas mabilis sumagot ang tao sa larawan kaysa sa tanong.',
  ],
  "9-1": [
    "When you report a blocker, include the date by which a decision still saves the deadline. It turns your problem into a clear choice.",
    "Kapag nag-uulat ng blocker, isama ang petsa kung kailan pa maililigtas ng desisyon ang deadline. Ginagawa nitong malinaw na pagpili ang problema mo.",
  ],
  "9-2": [
    "After a mistake, write the check that would have caught it on a sticky note by your screen. The next time the situation appears, the note is already there.",
    "Pagkatapos ng pagkakamali, isulat sa sticky note sa tabi ng screen ang check na sana'y nakahuli rito. Sa susunod na magkaparehong sitwasyon, nandiyan na ang paalala.",
  ],
  "9-3": [
    "Set a status message with your working hours and time zone. It answers most 'are you there?' messages before they are sent.",
    'Maglagay ng status message ng oras ng trabaho at time zone mo. Nasasagot nito ang karamihan ng "nandiyan ka ba?" bago pa ipadala.',
  ],
});
