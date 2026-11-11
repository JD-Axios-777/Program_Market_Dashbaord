/* Marketing info for each program.
   level:   "Beginner" | "Intermediate" | "Advanced"  (leave "" to show no difficulty badge)
   rated:   true shows a "Highly Rated" badge
   copy:    the overview shown at the top of the program page (plain text; blank line = new paragraph) */
window.PROGRAM_INFO = {
  "1kb-vagabond": { level: "Beginner", rated: false,
    tagline: "One kettlebell, anywhere. Cleans, snatches and swings build strength you can take on the road.",
    builtFor: "Built for newer lifters, or anyone training at home or on the road with a single kettlebell. This program builds strength, muscle and full-body power from a handful of core movements you'll get better at every week.",
    primaryGoals: ["Muscle Gain", "Strength", "Total Body Power"],
    sessionTimes: {"All weeks": ["30–40", "30–40", "30–40", "30–40"]},
    copy:
`A four-day program built around a single kettlebell, so you can train anywhere with minimal gear. Days alternate between squat/press and hinge/row patterns, pairing ballistic lifts like cleans, snatches and swings with presses, lunges and carries.

Six weeks move through hypertrophy, strength capacity and strength blocks, two weeks each, using the same core movements so you can focus on skill and consistency.` },

  "2kb-vagabond": { level: "Beginner", rated: false,
    tagline: "Two bells, more work: descending ladders on double cleans, swings and presses.",
    builtFor: "Built for trainees who are comfortable with basic kettlebell lifts and own a pair of bells. This program builds muscle and full-body power with double-kettlebell work and bodyweight pulling and pressing.",
    primaryGoals: ["Muscle Gain", "Total Body Power"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45"], "Week B": ["35–45", "35–45", "35–45", "35–45"]},
    copy:
`The two-kettlebell version of Vagabond: four days a week of double-bell cleans, swings, front-rack lunges and presses, plus pull-ups, dips and push-up variations.

Weeks 1–3 build volume with descending-rep ladders on the big double-bell lifts; weeks 4–6 shift to heavier, straighter sets with new exercise variations to keep progress moving.` },

  "alpha-bravo-hp1": { level: "Intermediate", rated: false,
    tagline: "Upper/lower lifting on a cardio base, with higher-rep weeks trading off against heavier ones.",
    builtFor: "Built for lifters who know the barbell basics and want a balanced five-day week. This program builds muscle and strength on the main lifts while steady cardio develops a solid conditioning base.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["30–40", "40–50", "30–40", "40–50", "30–40"], "Week B": ["30–40", "40–50", "25–35", "45–55", "35–45"]},
    copy:
`A five-day upper/lower split with two dedicated cardio days. Barbell bench, squat and deadlift lead each strength day, followed by unilateral work, accessories and core.

Hypertrophy and strength capacity weeks alternate, so you get a higher-rep week followed by a heavier week, every week for six weeks, while the steady aerobic intervals build your conditioning base.` },

  "alpha-bravo-sp1": { level: "Intermediate", rated: false,
    tagline: "The heavier sibling of HP1, with more load on bench, squat, deadlift and pull-ups.",
    builtFor: "Built for lifters who know the barbell basics and want to push heavier on the main lifts. This program prioritizes strength on the bench, squat, deadlift and pull-up, with cardio to support recovery and work capacity.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "40–50", "35–45", "40–50", "30–40"], "Week B": ["40–50", "40–50", "35–45", "45–55", "35–45"]},
    copy:
`A five-day upper/lower split with two cardio days, built around heavier main-lift work than its HP sibling. Bench, squat, deadlift and pull-ups lead each session, backed by single-leg work and accessories.

Alternating hypertrophy and strength capacity weeks keep the stimulus varied, while the longer aerobic intervals support recovery and work capacity.` },

  "axios-ppl-6-day": { level: "Advanced", rated: false,
    tagline: "Push, pull, legs, twice a week. High volume for lifters who recover well.",
    builtFor: "Built for experienced lifters who recover well and want high training frequency. This program trains every muscle group twice a week, building size first and then turning it into strength.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"Week A": ["40–50", "45–55", "40–50", "30–40", "30–40", "35–45"], "Week B": ["40–50", "40–50", "40–50", "30–40", "30–40", "35–45"]},
    copy:
`A classic six-day push/pull/legs split for lifters who want high frequency and high volume. Each muscle group is trained twice a week, with a heavy barbell lift leading every session followed by plenty of accessory work.

Weeks 1–3 focus on hypertrophy; weeks 4–6 move to strength capacity with heavier top sets, so the program builds size first and then turns it into strength.` },

  "bellator-phase-1": { level: "Intermediate", rated: false,
    tagline: "A classic body-part split with tempo and pause work on every lead lift.",
    builtFor: "Built for lifters with a training base who want a classic bodybuilding-style split. This program builds muscle and strength side by side, with interval cardio to keep conditioning and body composition in check.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "45–55", "40–50", "40–50"], "Week B": ["45–55", "45–55", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`A six-day bodybuilding-style split (chest/triceps/delts, back/lats/biceps, legs/core, arms/shoulders) with two cardio days. Each session opens with a barbell lift using tempo or pause work, then builds out with dumbbell and bodyweight accessories.

Hypertrophy and strength capacity weeks alternate so you train size and strength side by side, while the interval cardio keeps your conditioning in check.` },

  "bellator-phase-2": { level: "Intermediate", rated: false,
    tagline: "New main lifts and heavier loading on the same split. The next step after Phase 1.",
    builtFor: "Built for lifters who have finished Bellator Phase 1 or have a similar split under their belt. This program brings heavier loading and new main lifts to keep size and strength moving forward.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "50–60", "40–50", "40–50"], "Week B": ["45–55", "45–55", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`Phase 2 of Bellator keeps the six-day body-part split and two cardio days, swapping in new main lifts (incline bench, pause squat, standing press, snatch-grip deadlift) and heavier loading.

Alternating hypertrophy and strength capacity weeks continue to push both size and strength, building directly on Phase 1.` },

  "bludkrieg": { level: "Intermediate", rated: false,
    tagline: "Four lifts that matter, trained hard. Watch the numbers climb every two weeks.",
    builtFor: "Built for lifters who are comfortable with the main barbell lifts and can train four days a week. This program builds strength and muscle on a short list of lifts, so you can watch the weights climb week to week.",
    primaryGoals: ["Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["30–40", "30–40", "30–40", "30–40"]},
    copy:
`A four-day barbell-focused program pairing a squat or pull with a press or hinge each day. Back squat, close-grip bench, bent row and incline bench anchor the week.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, with the same exercises throughout so you can watch the loads climb.` },

  "boneyard": { level: "Beginner", rated: false,
    tagline: "Three days, a few barbell lifts done well. The simplest way into structured training.",
    builtFor: "Built for newer lifters, or anyone short on time who can train three days a week. This program teaches structured barbell training and builds a foundation of strength and muscle with a few lifts done well.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"Week A": ["25–35", "20–30", "25–35"], "Week B": ["20–30", "25–35", "20–30"]},
    copy:
`A simple, efficient three-day program: one lower-body, one upper-body and one total-body strength day. Each session leads with a barbell lift and adds a few targeted accessories.

Hypertrophy and strength capacity weeks alternate, making this a great entry point to structured barbell training or a solid option when time is tight.` },

  "centurion-phase-1": { level: "Intermediate", rated: false,
    tagline: "The base of the Centurion System: squat, bench, deadlift and press, plus two cardio days.",
    builtFor: "Built for lifters who know the main barbell lifts and want a structured start to heavier strength work. This program builds strength on the squat, bench press, deadlift and standing press while two cardio days build your aerobic base.",
    primaryGoals: ["Strength", "Aerobic Endurance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "40–50", "40–50", "40–50", "40–50"], "Week B": ["40–50", "50–60", "40–50", "30–40", "40–50"]},
    copy:
`A five-day program: three total-body strength days and two cardio days. Each strength day leads with one of the main barbell lifts, works up to top sets at 75–80%, and finishes with a short accessory superset.

Strength capacity and strength weeks alternate, and the cardio days pair intervals with steady aerobic work. This is Phase 1 of the Centurion System and sets you up for the heavier loading in Phase 2.` },

  "centurion-phase-2": { level: "Intermediate", rated: false,
    tagline: "Squat, bench and deadlift pushed toward 85–90%, with intervals to stay conditioned.",
    builtFor: "Built for lifters with solid technique on the squat, bench and deadlift who want to get significantly stronger. This program pushes the main lifts toward heavy top sets while interval cardio keeps you conditioned.",
    primaryGoals: ["Strength", "Aerobic Endurance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "30–40", "35–45", "30–40", "35–45"], "Week B": ["40–50", "30–40", "40–50", "30–40", "50–60"]},
    copy:
`A five-day strength program with two interval cardio days. Back squat, bench press and deadlift are trained hard, with top sets climbing toward 85–90% over the six weeks.

Strength and max-strength weeks alternate, giving you heavy exposure to the main lifts while the accessory work and cardio keep you balanced and conditioned.` },

  "centurion-phase-3": { level: "Intermediate", rated: false,
    tagline: "High sets, low reps, heavy bars. Locks in the strength built in Phase 2.",
    builtFor: "Built for lifters coming off Centurion Phase 2 or another heavy strength block. This program locks in strength on the main lifts with high-set, low-rep work, supported by interval cardio.",
    primaryGoals: ["Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["45–55", "40–50", "40–50", "40–50", "45–55"], "Week B": ["55–65", "40–50", "45–55", "40–50", "40–50"]},
    copy:
`Phase 3 of Centurion keeps the five-day layout of three strength days and two interval cardio days, rotating squat, bench, deadlift and standing press variations.

Strength capacity and strength weeks alternate, including high-set, low-rep work on the main lifts, to lock in the strength built in Phase 2.` },

  "darkwater-1kb": { level: "Intermediate", rated: false,
    tagline: "Minimal gear, full program: one kettlebell plus pull-ups and dips for strength, power and conditioning.",
    builtFor: "Built for trainees with a training base who work out at home or with minimal equipment. This program uses one kettlebell and bodyweight work to build muscle, power, core strength and conditioning.",
    primaryGoals: ["Muscle Gain", "Total Body Power", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45", "35–45", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`A six-day program built around a single kettlebell plus bodyweight work: upper days, lower/core days and two cardio days. Pull-ups, dips, swings and single-arm kettlebell lifts carry most of the load.

Hypertrophy and strength capacity weeks alternate, making this a strong option for home or minimal-equipment training that still covers strength, power and conditioning.` },

  "darkwater-2kb": { level: "Intermediate", rated: false,
    tagline: "A pair of bells and a pull-up bar. Double swings, front-rack work and presses.",
    builtFor: "Built for trainees with a training base and a pair of kettlebells at home. This program builds muscle, power and work capacity with double-bell lifts, pull-ups, dips and regular cardio.",
    primaryGoals: ["Muscle Gain", "Total Body Power", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "35–45", "35–45", "35–45", "35–45", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`The two-kettlebell version of Darkwater: six days of upper, lower/core and cardio sessions built around double-bell swings, front-rack split squats and presses, plus pull-ups and dips.

Alternating hypertrophy and strength capacity weeks build muscle and work capacity with minimal equipment.` },

  "darkwater-phase-1": { level: "Intermediate", rated: false,
    tagline: "Pull-ups, dips, split squats and deadlifts, with core work built into every lower day.",
    builtFor: "Built for lifters with the basics in place who want a well-rounded six-day week. This program develops size and strength while core work and interval cardio build durability and an aerobic base.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["35–45", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`A six-day program alternating upper days, lower/core days and cardio. Pull-ups, dips, split squats and deadlifts form the backbone, with core and mobility work built into every lower day.

Hypertrophy and strength capacity weeks alternate to develop both size and strength, while two interval cardio days build your aerobic base.` },

  "darkwater-phase-2": { level: "Intermediate", rated: false,
    tagline: "Dead-stop pull-ups, box squats and isometric deadlifts for a sturdier middle phase.",
    builtFor: "Built for lifters coming off Darkwater Phase 1 or a similar program. This program introduces new pulling, squatting and deadlift variations to keep building muscle, with plenty of core work throughout.",
    primaryGoals: ["Muscle Gain", "Mobility / Core Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "50–60", "45–55", "40–50"], "Week B": ["40–50", "40–50", "35–45", "35–45", "40–50", "40–50"]},
    copy:
`Phase 2 of Darkwater keeps the six-day upper / lower-core / cardio structure and introduces new variations: close-grip and dead-stop pull-ups, box squats and isometric deadlifts.

Alternating hypertrophy and strength capacity weeks continue the progression from Phase 1, with plenty of core work throughout.` },

  "darkwater-phase-3": { level: "Intermediate", rated: false,
    tagline: "L-sit pull-ups, pause squats and sumo pulls close out the Darkwater series.",
    builtFor: "Built for lifters who have completed earlier Darkwater phases or have comparable experience. This program uses more demanding variations of the key movements to build muscle, strength and a strong, stable core.",
    primaryGoals: ["Muscle Gain", "Strength", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["40–50", "45–55", "35–45", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"]},
    copy:
`The final Darkwater phase moves to push/pull and legs/core days alongside two cardio days, with advanced variations like L-sit pull-ups, pause squats and sumo deadlifts.

Hypertrophy and strength capacity weeks alternate to round out the Darkwater series with more demanding versions of its key movements.` },

  "deimos-phase-1": { level: "Advanced", rated: false,
    tagline: "Strength, power and size in the same week, backed by aerobic work for recovery.",
    builtFor: "Built for experienced lifters who can handle six training days with heavy barbell work. This program trains strength, power and size in the same week, with aerobic work to support recovery.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "35–45", "25–35", "30–40", "35–45", "20–30"], "Week B": ["35–45", "40–50", "25–35", "30–40", "35–45", "20–30"]},
    copy:
`A six-day program with dedicated lower strength, upper strength, lower power and upper hypertrophy days, plus two aerobic cardio days. Barbell deadlifts, bench and presses lead each session.

Hypertrophy and strength capacity weeks alternate, training strength, power and size in a single week while the aerobic work supports recovery.` },

  "deimos-phase-2": { level: "Advanced", rated: false,
    tagline: "Harder intervals and new main lifts, then an unload week to absorb the work.",
    builtFor: "Built for experienced lifters coming off Deimos Phase 1 or a similar program. This program raises the demand with new main lifts and harder intervals, then finishes with an unload week to recover.",
    primaryGoals: ["Strength", "Muscle Gain", "Mobility / Core Strength"],
    sessionTimes: {"Week A": ["35–45", "40–50", "15–25", "30–40", "30–40", "25–35"], "Week B": ["40–50", "45–55", "15–25", "30–40", "35–45", "25–35"]},
    copy:
`Phase 2 of Deimos keeps the strength / power / hypertrophy day structure and two cardio days, with new main lifts and harder aerobic intervals.

Six weeks of alternating hypertrophy and strength capacity training finish with a seventh unload week to recover before the next phase.` },

  "deimos-phase-3": { level: "Advanced", rated: false,
    tagline: "Box squats, pause work and heavier top sets finish the Deimos series.",
    builtFor: "Built for experienced lifters who have run the earlier Deimos phases. This program caps the series with heavier top sets and longer aerobic intervals to push strength and conditioning further.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "35–45", "25–35", "30–40", "35–45", "35–45"], "Week B": ["35–45", "35–45", "25–35", "35–45", "35–45", "35–45"]},
    copy:
`The final Deimos phase continues the six-day strength, power and hypertrophy structure with longer aerobic capacity intervals.

Alternating hypertrophy and strength capacity weeks build on Phases 1 and 2, with box squats, pause work and heavier top sets on the main lifts.` },

  "drago": { level: "Advanced", rated: false,
    tagline: "Strong, explosive and well built: heavy barbell days plus kettlebell power work.",
    builtFor: "Built for experienced lifters who want to be strong, explosive and muscular at the same time. This program combines heavy barbell days, kettlebell power work and hypertrophy days with mixed-interval cardio.",
    primaryGoals: ["Strength", "Total Body Power", "Muscle Gain"],
    sessionTimes: {"Week A": ["35–45", "30–40", "35–45", "35–45", "35–45"], "Week B": ["40–50", "40–50", "35–45", "35–45", "35–45", "40–50"]},
    copy:
`A six-day program pairing lower and upper strength days with a lower power day and an upper hypertrophy day, plus cardio. Back squat, deadlift, incline bench and bent row anchor the week, with kettlebell power work mixed in.

Hypertrophy and strength capacity weeks alternate to develop strength, power and muscle together, supported by mixed-interval cardio.` },

  "echelon": { level: "Beginner", rated: false,
    tagline: "The same lifts all six weeks, so technique sticks while the loads rise.",
    builtFor: "Built for newer lifters who want a full week of training with plenty of conditioning. This program keeps the same exercises all six weeks so you can focus on technique as the weights climb, while cardio builds your engine.",
    primaryGoals: ["Muscle Gain", "Strength", "Metabolic Conditioning"],
    sessionTimes: {"All weeks": ["45–55", "50–60", "40–50", "50–60", "50–60", "35–45"]},
    copy:
`A six-day program with two press/squat days, two row/hinge days and two conditioning days. Incline bench, standing press, bent row and pull-ups lead the strength work.

The same exercises run all six weeks while the loading moves through hypertrophy, strength capacity and strength blocks, two weeks each, so you can focus on technique as the weights climb. The cardio days mix steady work with harder aerobic intervals.` },

  "falcata": { level: "Beginner", rated: false,
    tagline: "Tempo squats, pause bench and plenty of core work. Move well first, then load it.",
    builtFor: "Built for newer trainees, or anyone who wants to move better before chasing heavy weights. This program teaches control on the squat and bench, with heavy core and mobility work and regular cardio.",
    primaryGoals: ["Mobility / Core Strength", "Fitness Maintenance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "35–45", "45–55", "40–50", "45–55"]},
    copy:
`A six-day program with legs/core and push/pull days plus two cardio days. Tempo and pause variations of the squat and bench teach control, and a heavy dose of core and mobility work supports every lower day.

Hypertrophy and strength capacity weeks alternate, making this a well-rounded program for building good movement habits along with fitness.` },

  "fizeek-5-day-template": { level: "Intermediate", rated: false,
    tagline: "A physique split with steady volume across barbells, cables and machines.",
    builtFor: "Built for lifters with gym experience whose main goal is building muscle. This program delivers steady muscle-building volume across five days, using barbells, dumbbells, cables and machines.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"All weeks": ["35–45", "35–45", "35–45", "35–45", "40–50"]},
    copy:
`A five-day physique split: chest/triceps/delts, back/lats/biceps, quads/hams/glutes, push/pull and legs/back/core. Each day leads with a barbell or dumbbell compound lift followed by machine, cable and dumbbell accessories.

Designed for steady muscle-building volume across the week.` },

  "ground-based-calisthenics-mobility": { level: "Beginner", rated: false,
    tagline: "No equipment needed. Push-up progressions plus hip, spine and ankle mobility.",
    builtFor: "Built for anyone training at home with no equipment, or recovering between harder blocks. This program builds upper-body strength with push-up progressions and improves hip, spine and ankle mobility.",
    primaryGoals: ["Mobility / Core Strength", "Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["35–45", "35–45", "35–45", "35–45"]},
    copy:
`A four-day, equipment-free program alternating push days with core and mobility days. Push-up progressions build upper-body strength while the core/mobility days work hips, spine and ankles.

A great option for training at home, building a movement foundation, or recovering between harder blocks.` },

  "gym-based-functional-strength": { level: "Beginner", rated: false,
    tagline: "A straightforward full-gym plan: build a base, then get stronger on it.",
    builtFor: "Built for newer lifters with access to a full gym who want straightforward, all-round strength. This program builds a muscle base first, then moves into heavier strength work, with core training and cardio throughout.",
    primaryGoals: ["Strength", "Muscle Gain", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "30–40", "25–35", "40–50", "35–45", "25–35"], "Week B": ["30–40", "25–35", "25–35", "40–50", "35–45", "25–35"]},
    copy:
`A six-day program with two lower-body strength days, two upper-body strength days and two cardio days. Squats, RDLs, pulldowns and presses lead the sessions, with core work and functional accessories.

Weeks 1–3 build a hypertrophy base and weeks 4–6 move into strength capacity, making this a straightforward full-gym program for building all-round strength.`,
    includesNote: "Built for a full gym: barbell, dumbbells, cables and a squat rack. If yours is missing something, swaps cover it." },

  "halcyon-phase-1": { level: "Intermediate", rated: false,
    tagline: "Four body-part days, each opened by a heavy barbell lift.",
    builtFor: "Built for lifters who prefer a four-day body-part split and know their way around the gym. This program builds size first and then strength, finishing with an unload week to recover.",
    primaryGoals: ["Muscle Gain", "Strength"],
    sessionTimes: {"All weeks": ["35–45", "40–50", "40–50", "40–50"]},
    copy:
`A four-day body-part split: shoulders/arms, back, chest/triceps and legs. Each day opens with a heavy barbell lift and follows with focused accessory work.

Weeks 1–3 are hypertrophy, weeks 4–6 move to strength capacity, and week 7 is an unload week to recover before what comes next.` },

  "htk-phase-1": { level: "Beginner", rated: false,
    tagline: "Lifting, metabolic circuits and cardio, rotating through muscle, strength and power weeks.",
    builtFor: "Built for newer trainees who want a hybrid of lifting and hard conditioning. This program rotates muscle, strength and power focus while circuits and cardio build fitness and help with fat loss.",
    primaryGoals: ["Muscle Gain", "Strength", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["45–55", "45–55", "20–30", "45–55", "55–65", "45–55"], "Week B": ["40–50", "40–50", "30–40", "45–55", "55–65", "60–70"], "Week C": ["35–45", "45–55", "45–55", "40–50", "55–65", "90–100"]},
    copy:
`A six-day hybrid program combining strength, hypertrophy, metabolic circuits and cardio. Bench, squat and deadlift lead the strength days, with kettlebell and bodyweight work in the circuits.

Weeks run on a three-week rotation of hypertrophy, strength capacity and strength, repeated twice, so each quality gets focused attention.` },

  "htk-phase-2": { level: "Intermediate", rated: false,
    tagline: "More power, more sprints: trap bar work and snatches join the hybrid mix.",
    builtFor: "Built for trainees coming off HTK Phase 1 or with similar hybrid training experience. This program adds more power work and sprint intervals to build strength, explosiveness and conditioning.",
    primaryGoals: ["Strength", "Metabolic Conditioning", "Muscle Gain"],
    sessionTimes: {"Week A": ["40–50", "45–55", "20–30", "45–55", "50–60", "20–30"], "Week B": ["45–55", "45–55", "30–40", "45–55", "50–60", "60–70"], "Week C": ["45–55", "45–55", "45–55", "45–55", "50–60", "90–100"]},
    copy:
`Phase 2 of HTK adds more power and metabolic work to the six-day hybrid structure: trap bar deadlifts and jumps, kettlebell snatches and sprint intervals alongside the main barbell lifts.

The three-week hypertrophy / strength capacity / strength rotation repeats twice, building on Phase 1.` },

  "htk-phase-3": { level: "Advanced", rated: false,
    tagline: "Heavy barbells, power days and sprint intervals in the series' toughest sessions.",
    builtFor: "Built for experienced hybrid trainees who have completed the earlier HTK phases. This program pairs heavy barbell work with power days and sprint intervals in the most demanding sessions of the series.",
    primaryGoals: ["Strength", "Total Body Power", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "45–55", "20–30", "45–55", "50–60", "20–30"], "Week B": ["40–50", "45–55", "30–40", "45–55", "50–60", "60–70"], "Week C": ["45–55", "50–60", "30–40", "40–50", "50–60", "60–70"]},
    copy:
`The final HTK phase pairs heavy barbell work with power days, upper-body metabolic conditioning and sprint intervals.

The three-week hypertrophy / strength capacity / strength rotation repeats twice to cap off the series with its most demanding sessions.` },

  "imperium-phase-1": { level: "Advanced", rated: false,
    tagline: "Wave-loaded squats, deadlifts and bench for top-end strength and speed.",
    builtFor: "Built for experienced lifters who want to push top-end strength and speed. This program trains the squat, deadlift and bench at high intensity with dedicated power days and cardio for balance.",
    primaryGoals: ["Strength", "Fitness Maintenance", "Fat Loss"],
    sessionTimes: {"Week A": ["40–50", "40–50", "35–45", "40–50", "40–50", "40–50"], "Week B": ["45–55", "40–50", "35–45", "45–55", "45–55", "40–50"]},
    copy:
`A six-day strength-focused program with lower and upper strength days, lower and upper power days and two cardio days. Squat, deadlift and bench variations are trained at high intensity with wave-style loading.

Strength capacity and strength weeks alternate to build top-end strength and speed.` },

  "jacked-and-athletic": { level: "Intermediate", rated: false,
    tagline: "Built to look strong and move fast: heavy pulls and presses meet intervals and med-ball power.",
    builtFor: "Built for established trainees who have the basics dialed in. This program increases your capacity to use strength in athletic demands, while improving conditioning and power endurance in dynamic movement patterns.",
    primaryGoals: ["Muscle Gain", "Strength", "Total Body Power"],
    /* Session lengths from Volt, Day 1–6, per rotation (includes warm-up) */
    sessionTimes: { "Week A": ["50–60", "45–55", "20–30", "45–55", "45–55", "20–30"], "Week B": ["50–60", "45–55", "30–40", "45–55", "40–50", "30–40"] },
    copy:
`A six-day program for building muscle and athleticism together: push/pull and lower/core days with built-in max-effort intervals and steady endurance work.

Weighted pull-ups, pause bench, tempo squats and deadlifts lead the strength work, with kettlebell and medicine ball power work and plenty of conditioning. Hypertrophy and strength capacity weeks alternate throughout.` },

  "kerberos": { level: "Beginner", rated: false,
    tagline: "Conditioning first: circuits and cardio lead, with strength work keeping the muscle on.",
    builtFor: "Built for newer trainees whose priority is conditioning and fat loss while still building muscle. This program mixes metabolic circuits, strength work and cardio across a full six-day week.",
    primaryGoals: ["Fat Loss", "Metabolic Conditioning", "Muscle Gain"],
    sessionTimes: {"Week A": ["45–55", "40–50", "35–45", "45–55", "45–55", "35–45"], "Week B": ["45–55", "45–55", "35–45", "40–50", "45–55", "35–45"], "Week C": ["45–55", "35–45", "35–45", "40–50", "45–55", "35–45"]},
    copy:
`A six-day hybrid program mixing metabolic conditioning circuits, hypertrophy, total-body strength and cardio. Dumbbell, kettlebell and bodyweight circuits sit alongside trap bar and bench work.

A three-week hypertrophy / strength capacity / strength rotation repeats twice, with a strong focus on conditioning and fat loss.` },

  "kilo-bravo": { level: "Beginner", rated: false,
    tagline: "Three sessions, kettlebells only. Cleans, presses and snatches for total-body power.",
    builtFor: "Built for newer lifters, or anyone with only kettlebells and three days a week to train. This program builds total-body power and strength with a small set of double- and single-bell lifts.",
    primaryGoals: ["Total Body Power"],
    sessionTimes: {"Week A": ["30–40", "30–40", "30–40"], "Week B": ["30–40", "30–40", "30–40"]},
    copy:
`A three-day kettlebell program alternating press/squat and hinge/row sessions. Double-bell cleans, presses and swings plus single-arm snatches build total-body power and strength.

Simple, efficient and easy to fit into a busy week, with nothing more than kettlebells.` },

  "kreuzer-phase-1": { level: "Advanced", rated: false,
    tagline: "Serious engine work, from hard intervals to long steady sessions, without giving up muscle.",
    builtFor: "Built for experienced trainees who want serious aerobic capacity without losing muscle. This program pairs hypertrophy and power work with hard intervals and long steady cardio sessions.",
    primaryGoals: ["Aerobic Endurance", "Muscle Gain", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "40–50", "40–50", "40–50", "35–45", "60–70"], "Week B": ["40–50", "40–50", "55–65", "40–50", "35–45", "45–55"]},
    copy:
`A six-day program with lower/core hypertrophy and power days, upper strength and upper metabolic circuit days, plus two cardio days that mix hard intervals with long steady endurance work.

Hypertrophy and strength capacity weeks alternate to build muscle, power and serious aerobic capacity.` },

  "opr-8-phase-1": { level: "Advanced", rated: false,
    tagline: "Throws, jumps, sleds and heavy lifts: performance training for an athletic base.",
    builtFor: "Built for experienced trainees who want athletic performance, not just gym numbers. This program blends heavy lifting, explosive throws and jumps, and aerobic work to build a powerful, well-conditioned base.",
    primaryGoals: ["Total Body Power", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["40–50", "40–50", "55–65", "50–60", "50–60", "45–55"], "Week B": ["40–50", "40–50", "55–65", "40–50", "50–60", "45–55"], "Week C": ["40–50", "40–50", "55–65", "40–50", "50–60", "45–55"]},
    copy:
`A six-day performance program blending strength, aerobic work, hypertrophy/general prep and explosive power. Medicine ball throws, trap bar jumps, kettlebell ballistics and sled work sit alongside the main barbell lifts.

Six weeks move through hypertrophy, strength capacity and strength blocks, two weeks each, building an athletic, well-conditioned base.` },

  "reaver-phase-1": { level: "Advanced", rated: false,
    tagline: "Separate strength and size days for upper and lower body, with aerobic work for recovery.",
    builtFor: "Built for experienced lifters who want separate strength and size days each week. This program drives muscle and strength with an upper/lower split, while aerobic intervals support recovery.",
    primaryGoals: ["Muscle Gain", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["35–45", "40–50", "35–45", "40–50", "35–45", "25–35"], "Week B": ["35–45", "40–50", "35–45", "40–50", "45–55", "45–55"], "Week C": ["35–45", "40–50", "35–45", "35–45", "45–55", "45–55"]},
    copy:
`A six-day upper/lower program with separate strength and hypertrophy days for each, plus two cardio days. Bench, squat, high-incline press and stiff-legged deadlifts lead the sessions.

Hypertrophy and strength capacity weeks alternate to drive both size and strength, with aerobic intervals supporting recovery.` },

  "reaver-phase-2": { level: "Advanced", rated: false,
    tagline: "Standing press, snatch-grip and sumo pulls rotate in to keep Reaver moving.",
    builtFor: "Built for lifters coming off Reaver Phase 1 or a similar upper/lower program. This program rotates in new pressing and deadlift variations to keep building size and strength.",
    primaryGoals: ["Muscle Gain", "Strength", "Fitness Maintenance"],
    sessionTimes: {"Week A": ["35–45", "45–55", "35–45", "45–55", "40–50", "35–45"], "Week B": ["35–45", "45–55", "35–45", "45–55", "40–50", "35–45"]},
    copy:
`Phase 2 of Reaver keeps the six-day upper/lower strength and hypertrophy structure with two cardio days, rotating in standing press, snatch-grip and sumo deadlifts.

Alternating hypertrophy and strength capacity weeks build on Phase 1.` },

  "ultima-phase-1": { level: "Intermediate", rated: false,
    tagline: "A machine-and-cable body-part split built for a well-equipped gym.",
    builtFor: "Built for lifters who train in a well-equipped gym and want a body-part split. This program builds muscle with machines, cables and dumbbells, with regular cardio for conditioning.",
    primaryGoals: ["Muscle Gain", "Fitness Maintenance", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["50–60", "50–60", "40–50", "55–65", "55–65", "45–55"], "Week B": ["45–55", "45–55", "40–50", "55–65", "50–60", "45–55"]},
    copy:
`A six-day body-part split (back/lats/biceps, chest/triceps/delts, quads/hams/glutes, arms/shoulders/core) with two cardio days, built heavily around machines, cables and dumbbells.

Weeks 1–3 build hypertrophy and weeks 4–6 move to strength capacity with new exercise choices, making this ideal for a well-equipped gym.` },

  "ultima-phase-2": { level: "Intermediate", rated: false,
    tagline: "Heavier pyramids on the lead lifts as Ultima moves into strength.",
    builtFor: "Built for lifters coming off Ultima Phase 1 or a similar machine-based split. This program adds heavier loading on the lead lifts to keep muscle and strength progressing.",
    primaryGoals: ["Muscle Gain", "Strength", "Fat Loss"],
    sessionTimes: {"Week A": ["45–55", "45–55", "40–50", "40–50", "45–55", "40–50"], "Week B": ["45–55", "45–55", "40–50", "45–55", "50–60", "45–55"]},
    copy:
`Phase 2 of Ultima continues the six-day machine-and-cable body-part split with two cardio days, with heavier pyramid loading on the lead lifts.

Weeks 1–3 focus on hypertrophy and weeks 4–6 on strength capacity, building on Phase 1.` },

  "warhorse": { level: "Advanced", rated: false,
    tagline: "Heavy squats, deadlifts and weighted pull-ups, plus metabolic intervals and long cardio.",
    builtFor: "Built for experienced lifters who want to train heavy and stay well conditioned. This program pushes the squat, deadlift, bench and weighted pull-up, with metabolic intervals and long steady cardio.",
    primaryGoals: ["Strength", "Muscle Gain", "Metabolic Conditioning"],
    sessionTimes: {"Week A": ["40–50", "40–50", "30–40", "40–50", "40–50", "40–50"], "Week B": ["40–50", "40–50", "40–50", "40–50", "40–50", "40–50"], "Week C": ["45–55", "40–50", "40–50", "45–55", "45–55", "40–50"]},
    copy:
`A six-day program with squat/press, hinge/pull and press/squat, pull/hinge days plus two conditioning days. Squat, deadlift, bench and weighted pull-ups are trained heavy, supported by machine and dumbbell accessories.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, alongside metabolic intervals and long steady cardio.` },

  "warpig": { level: "Intermediate", rated: false,
    tagline: "Single-leg and single-arm work does the heavy lifting, with cardio to build your engine.",
    builtFor: "Built for lifters with a training base who prefer single-leg and single-arm work over heavy barbell lifts. This program builds muscle and strength while interval and steady cardio build your engine.",
    primaryGoals: ["Muscle Gain", "Strength", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["45–55", "45–55", "40–50", "45–55", "50–60", "40–50"], "Week B": ["50–60", "45–55", "40–50", "45–55", "50–60", "40–50"]},
    copy:
`A six-day program with squat/press and pull/hinge days plus two cardio days. Split squats, lunges, single-arm rows, pull-ups and dips carry the strength work, with machine accessories.

Hypertrophy and strength capacity weeks alternate, with aerobic intervals and steady cardio building your engine.` },

  "warpony": { level: "Beginner", rated: false,
    tagline: "An approachable five-day week built on dumbbells, machines and cardio.",
    builtFor: "Built for newer lifters who want an approachable five-day week. This program uses mostly dumbbell, machine and cable work to build muscle, with interval and steady cardio for fitness and fat loss.",
    primaryGoals: ["Muscle Gain", "Fat Loss", "Aerobic Endurance"],
    sessionTimes: {"Week A": ["30–40", "30–40", "30–40", "20–30", "30–40"], "Week B": ["30–40", "30–40", "30–40", "30–40", "30–40"]},
    copy:
`A five-day program with squat/press and hinge/row days plus two cardio days. Dumbbell split squats, presses and rows lead the sessions, with barbell, machine and cable support.

Hypertrophy and strength capacity weeks alternate, with interval and steady cardio for a well-rounded, approachable program.` },

  "wolfdog-phase-1": { level: "Advanced", rated: false,
    tagline: "Squat, bench and deadlift several times a week, with top sets climbing toward 90%.",
    builtFor: "Built for experienced lifters who want to get stronger on the squat, bench and deadlift through high frequency. This program trains the main lifts often, with top sets climbing toward 90% of your max.",
    primaryGoals: ["Strength", "Muscle Gain"],
    sessionTimes: {"All weeks": ["40–50", "40–50", "40–50", "45–55", "45–55", "45–55"]},
    copy:
`A six-day strength program cycling legs/core, push/pull and back/lats/traps twice a week. Back squat, bench and deadlift and their pause and stiff-legged variations are trained with high frequency.

Six weeks move through hypertrophy, strength capacity and strength, two weeks each, with top sets climbing toward 90%.` }
};

/* "What Does this Program Come With?" section, shown on every program page.
   {weeks} is replaced with the program's length. The closing note defaults to a line about the
   equipment list; set includesNote on a program above to give it its own line. */
window.PROGRAM_INCLUDES = {
  title: "What Does this Program Come With?",
  lead: "This page shows the plan. Buying it puts the plan in a coaching app that adjusts to you.",
  items: [
    { h: "Premium coaching app", lines: [
      "All {weeks} weeks are loaded into the app, day by day.",
      "Open it at the gym and follow the session in order.",
      "Log your sets as you go, so every week builds on the last." ] },
    { h: "Loads that adjust to how you feel (RPE)", lines: [
      "RPE means rate of perceived exertion: a 1–10 score for how hard a set felt.",
      "Each working set has a target effort.",
      "Set felt easier than the target? Add weight. Harder? Take some off.",
      "The percentages on this page are the starting point. Your RPE adjusts them each session." ] },
    { h: "Swaps and replacements", lines: [
      "Equipment taken or missing? Swap in an approved replacement.",
      "A movement doesn't suit you? Same fix.",
      "Each replacement trains the same movement pattern, so the program keeps its structure." ] },
    { h: "Ongoing support", lines: [
      "Questions about a lift, a load or how the program is going? Reach out and get an answer.",
      "Technical help with the app is included, from setup to logging your sessions.",
      "Reset the program and run it again any time.",
      "Support comes with every run, so you can always reach out." ] }
  ],
  note: "Missing something from the equipment list above? Swaps cover it.",
  noEquipNote: "No equipment needed. If a movement doesn't suit you, swaps cover it."
};

/* Upgrade section at the bottom of every program page: makes the case for the
   Custom Program / Accountability service. Its link is UPGRADE_LINK in links.js. */
window.PROGRAM_UPGRADE = {
  eyebrow: "Want it built around you?",
  teaser: "Get a custom program",
  title: "Custom Program + Accountability",
  lead: "This program is written for a general lifter with a standard week. A custom program starts from your week instead.",
  points: [
    { h: "Written for you", p: "Your days per week, your equipment, your goals and your starting point." },
    { h: "Regular check-ins", p: "A coach reviews how your training is going and gives you guidance." },
    { h: "Accountability", p: "Scheduled check-ins keep you consistent from one week to the next." }
  ],
  button: "Get my custom program",
  price: "$100 / month"
};

/* Training Club pitch at the bottom of the main program list. The button links to CLUB_LINK in links.js. */
window.CLUB_PITCH = {
  eyebrow: "By application",
  title: "Every program. One membership.",
  lead: "Training Club members get all {count} programs and move from one to the next without buying each one.",
  price: "$25", per: "/ month",
  points: [
    { h: "Every program, one membership", p: "All {count} programs. Move from one phase or program to the next without buying each one." },
    { h: "Costs less than buying programs one at a time", p: "A single program is $50. Membership starts at $25 per month for the full library." },
    { h: "Membership is selective", p: "Training Club is limited to members who qualify. The intake survey tells us if it's the right fit." }
  ],
  button: "Take the intake survey",
  note: "See if you qualify"
};

/* Program bundles. A bundle goes live once it has programs, price and link (Kit checkout URL); until then it shows as Coming soon.
   programs: program ids, listed in suggested run order. */
window.BUNDLES = [
  { id: "kettlebell", name: "Kettlebell Program Bundle",
    short: "Train anywhere with one or two kettlebells.",
    copy: `Programs built around one or two kettlebells, for training at home, on the road, or anywhere space is tight.

Each program uses a small set of kettlebell lifts done well, so you build strength, muscle and power without a full gym.`,
    who: "Anyone who trains with kettlebells, wants a minimal-equipment setup, or needs programs that travel.",
    programs: ["1kb-vagabond", "2kb-vagabond", "kilo-bravo", "darkwater-1kb", "darkwater-2kb"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/kettlebell-program-bundle" },
  { id: "strength", name: "Strength Program Bundle",
    short: "Get stronger on the squat, bench press and deadlift.",
    copy: `Programs focused on getting stronger on the main barbell lifts: the squat, bench press and deadlift.

Loads climb in planned steps across each program, with accessory work to keep you balanced and healthy under heavier weights.`,
    who: "Lifters comfortable with the main barbell lifts who want strength to be the priority.",
    programs: ["centurion-phase-1", "deimos-phase-1", "reaver-phase-1", "warhorse", "imperium-phase-1"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/strength-program-bundle" },
  { id: "hybrid", name: "Hybrid Program Bundle",
    short: "Lifting and conditioning in the same week.",
    copy: `Programs that combine strength training with structured conditioning, so you build muscle, strength and fitness at the same time.

Each week mixes lifting days with interval and steady cardio work, without one getting in the way of the other.`,
    who: "Trainees who want to look and perform better without choosing between the weight room and cardio.",
    programs: ["kerberos", "drago", "jacked-and-athletic", "alpha-bravo-hp1", "alpha-bravo-sp1"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/hybrid-program-bundle" },
  { id: "athlete-tactical", name: "Athlete / Tactical Performance Bundle",
    short: "Power, speed, strength and conditioning that carry over.",
    copy: `Programs that develop power, speed, strength and conditioning for sport, service or physically demanding work.

Explosive lifts, throws and sprint work sit alongside heavy strength training and hard conditioning, so your fitness carries over outside the gym.`,
    who: "Athletes, military, law enforcement and first responders, or anyone who needs fitness that performs under real-world demands.",
    programs: ["opr-8-phase-1", "htk-phase-1", "jacked-and-athletic", "deimos-phase-1", "bellator-phase-1"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/athlete-tactical-bundle" },
  { id: "work-capacity", name: "Work Capacity & Stamina Bundle",
    short: "Build your engine: work hard, recover fast, repeat.",
    copy: `Programs that build your engine: the ability to work hard, recover quickly and repeat the effort.

Circuits, intervals and steady endurance work are paired with strength training, so you get fitter without losing the muscle you have built.`,
    who: "Anyone who runs out of gas early, wants better endurance, or wants more conditioning in their training week.",
    programs: ["htk-phase-1", "htk-phase-2", "kreuzer-phase-1", "opr-8-phase-1", "kerberos"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/work-capacity-bundle" },
  { id: "gym-beginner", name: "Gym Beginner Bundle",
    short: "A clear, step-by-step start in a full gym.",
    copy: `Programs that introduce structured gym training step by step, starting with the main lifts and simple weekly layouts.

Each program builds on the last, so you learn the movements, build a base of strength and muscle, and always know what to do next.`,
    who: "New lifters, or anyone returning after time off, who wants a clear plan to follow in a full gym.",
    programs: ["boneyard", "warpony", "gym-based-functional-strength", "centurion-phase-1", "bellator-phase-1"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/gym-beginner-bundle" },
  { id: "core-mobility", name: "Core & Mobility Bundle",
    short: "A stronger trunk and better-moving hips, spine and shoulders.",
    copy: `Programs that strengthen your core and improve how your hips, spine and shoulders move.

Control, stability and range of motion are trained directly, so everyday movement and your other training feel better.`,
    who: "Anyone who feels stiff, wants a stronger core, or wants to move better alongside their main training.",
    programs: ["falcata", "ground-based-calisthenics-mobility", "echelon", "gym-based-functional-strength", "darkwater-1kb"],
    price: "$150",
    link: "https://axios-remote-fitness-coaching.kit.com/products/core-mobility-bundle" }
];

/* Total Training Systems with their own sales page (#system-<id>).
   A system goes live once it has phases, price and link (Kit checkout URL).
   Systems not listed here still show in the library as "Coming soon".
   Copy rules: plain language, concrete claims, short sentences. */
window.SYSTEMS = [
  { id: "darkwater", name: "Darkwater Training System",
    weekTitle: "Six days. Same rhythm every phase.",
    short: "Pull-ups, dips, deadlifts, core and conditioning. Three phases that loop, so you never run out of program.",
    phases: ["darkwater-phase-1", "darkwater-phase-2", "darkwater-phase-3"],
    price: "$120",
    link: "https://axios-remote-fitness-coaching.kit.com/products/darkwater-training-system",
    headline: "Strong, durable and fit. Week after week, year after year.",
    intro: `Darkwater is a complete way to train. Six days a week: two upper-body days, two lower-body and core days, and two conditioning days.

The lifts are the ones that carry over to real life: pull-ups, dips, split squats, deadlifts and squats. Core work is built into every lower day. Conditioning builds the engine to back it up.`,
    who: "Lifters with the basics in place who want one system to follow for the long term, instead of searching for a new program every six weeks.",
    problem: {
      title: "Most programs end. Darkwater keeps going.",
      body: `A typical program runs six weeks, then stops. You have to find the next one, learn a new layout and start over.

Darkwater is three phases built to run in order. When Phase 3 ends, you start Phase 1 again. Your loads are set from your current numbers, so every cycle starts heavier than the last.`
    },
    week: [
      ["Day 1", "Upper", "Pull-ups, rows, presses"],
      ["Day 2", "Lower / Core", "Split squats, hinges, core"],
      ["Day 3", "Conditioning", "Intervals"],
      ["Day 4", "Upper", "Dips, presses, rows"],
      ["Day 5", "Lower / Core", "Deadlifts, lunges, core"],
      ["Day 6", "Conditioning", "Longer intervals"]
    ],
    weekNote: "Weeks alternate between two types. Muscle weeks use moderate weights for more reps. Strength weeks use heavier weights for fewer reps. Doing both in the same block builds size and strength together.",
    phaseNotes: {
      "darkwater-phase-1": { label: "Build the base", lifts: ["Pull-ups", "Dips", "Split squats", "Deadlifts"],
        body: "Learn the Darkwater week. The main lifts, core work on every lower day, and interval conditioning to build your aerobic base." },
      "darkwater-phase-2": { label: "Add control", lifts: ["Dead-stop pull-ups", "Box squats", "Isometric deadlifts", "Archer push-ups"],
        body: "New versions of the same movements. Pauses and dead stops remove momentum, so muscles do more of the work and positions get stronger." },
      "darkwater-phase-3": { label: "Raise the ceiling", lifts: ["L-sit pull-ups", "Pause squats", "Sumo deadlifts"],
        body: "The hardest versions of the key lifts, on a push/pull and legs/core split. Heavier top sets close out the cycle." }
    },
    loop: {
      title: "Run it again. Start stronger.",
      body: `After Phase 3, go back to Phase 1. The exercises are familiar, but the weights are not. Each phase uses percentages of your current best lifts, so the program moves up with you.

Each session also adjusts to the day. If a set feels harder or easier than planned, the app tells you how to change the load. On good days you push. On rough days you still train, without digging a hole.`,
      steps: ["Phase 1", "Phase 2", "Phase 3", "New numbers"]
    },
    constant: ["Six-day week: upper, lower/core, conditioning", "Muscle and strength weeks alternating", "Core work on every lower day", "Two conditioning days every week", "Sessions of about 35 to 60 minutes"],
    changes: ["Exercise variations get harder each phase", "Top sets get heavier through each phase", "Conditioning intervals get longer", "Your loads rise each cycle as your numbers go up"],
    travel: {
      title: "Away from the gym?",
      body: "Keep the same rhythm with one or two kettlebells, a pull-up bar and dip bars. Run a kettlebell version for a trip or a busy stretch, then step back into the system where you left off.",
      programs: ["darkwater-1kb", "darkwater-2kb"]
    },
    includes: [
      ["All three phases", "Darkwater Phases 1, 2 and 3: 18 weeks of programming you can repeat as often as you like."],
      ["Coaching app", "Every session laid out with sets, reps, loads and rest times."],
      ["Loads that adjust", "Rate how hard each set felt and the app adjusts your next load."],
      ["Exercise swaps", "Replace a movement when equipment is taken or something does not feel right."],
      ["Reset and rerun", "Restart any phase at any time to begin your next cycle."],
      ["Ongoing support", "Help with technique, setup and questions while you train."]
    ],
    faq: [
      ["How long is one cycle?", "18 weeks: three phases of six weeks each. Run it two or three times a year, with a few easy days between cycles if you need them."],
      ["Do I have to start at Phase 1?", "Yes, for your first cycle. Phase 1 sets your starting numbers and teaches the layout. After that, the order stays the same each time through."],
      ["Is the second cycle just a repeat?", "The structure repeats on purpose. The weights do not. Loads are based on your current best lifts, so a stronger you gets a heavier program."],
      ["What equipment do I need?", "A standard gym: barbell, dumbbells, bench, squat rack, pull-up bar and dip bars. A medicine ball, band and landmine are used in some sessions. Any cardio machine works for conditioning."],
      ["Can I buy one phase first?", "Yes. Each phase is sold on its own for $50. The full system is $120, and it is the better deal if you plan to keep going."]
    ]
  },
  { id: "deimos", name: "Deimos Training System",
    weekTitle: "Six days. Strength, power and size every week.",
    short: "Heavy barbell strength, power and size in the same week, with aerobic work for recovery. Three phases that loop.",
    phases: ["deimos-phase-1", "deimos-phase-2", "deimos-phase-3"],
    phaseWeeks: { "deimos-phase-2": 6 }, /* system page lists each phase as 6 weeks */
    price: "$120",
    link: "https://axios-remote-fitness-coaching.kit.com/products/deimos-training-system",
    headline: "Get stronger, move faster and build muscle. All in the same week.",
    intro: `Deimos is a barbell system for experienced lifters. Each week has a lower-body strength day, an upper-body strength day, a lower-body power day and an upper-body muscle day.

Two aerobic days hold it together. Easy, steady cardio helps you recover between heavy sessions, so you can keep training hard week after week.`,
    who: "Experienced lifters who are comfortable with the deadlift, squat and bench press and want strength, power and size from one long-term plan.",
    problem: {
      title: "Stop choosing between strong, fast and big.",
      body: `Most programs pick one goal. Train for strength and you lose speed. Train for size and your top-end strength stalls.

Deimos trains all three in every week. Each day has one job. Strength days go heavy. Power days move moderate weights fast. Muscle days use more reps. When Phase 3 ends, you start again from your new numbers.`
    },
    week: [
      ["Day 1", "Lower Strength", "Deadlifts and squats, heavy"],
      ["Day 2", "Upper Strength", "Bench and presses, heavy"],
      ["Day 3", "Aerobic", "Easy intervals"],
      ["Day 4", "Lower Power", "Fast pulls and squats"],
      ["Day 5", "Upper Muscle", "Incline press, rows"],
      ["Day 6", "Aerobic", "Steady cardio"]
    ],
    weekNote: "Weeks alternate between two types. Muscle weeks use moderate weights for more reps. Strength weeks use heavier weights for fewer reps. Top sets on the main lifts work up to about 80% of your best.",
    phaseNotes: {
      "deimos-phase-1": { label: "Build the base", lifts: ["Deadlifts", "Bench press", "Standing press", "Box squats"],
        body: "Learn the Deimos week. Heavy top sets on the main barbell lifts, fast power work, and easy aerobic sessions that build your recovery base." },
      "deimos-phase-2": { label: "Push harder", lifts: ["Pause bench", "Isometric sumo pulls", "Pause squats", "Dips"],
        body: "New main lifts, pauses and holds that build strength in the hardest positions, and harder aerobic intervals." },
      "deimos-phase-3": { label: "Raise the ceiling", lifts: ["Box squats", "Isometric deadlifts", "Close-grip bench", "Pull-ups"],
        body: "Box squats, pause work and more heavy top sets on the main lifts. Longer aerobic intervals keep your engine growing with your strength." }
    },
    loop: {
      title: "Run it again. Start stronger.",
      body: `After Phase 3, go back to Phase 1. The structure is the same, but your numbers are not. Each phase uses percentages of your current best lifts, so heavier lifts mean a heavier program.

Each session also adjusts to the day. If a set feels harder or easier than planned, the app tells you how to change the load. On good days you push. On rough days you still train, without digging a hole.`,
      steps: ["Phase 1", "Phase 2", "Phase 3", "New numbers"]
    },
    constant: ["Six-day week: strength, power, muscle and aerobic days", "Muscle and strength weeks alternating", "Barbell deadlift, squat and press lead each lifting day", "Two aerobic days every week", "Sessions of about 15 to 55 minutes"],
    changes: ["Main lifts change each phase", "Pauses and holds are added in Phases 2 and 3", "Aerobic intervals get longer and harder", "Your loads rise each cycle as your numbers go up"],
    includes: [
      ["All three phases", "Deimos Phases 1, 2 and 3: 18 weeks of programming you can repeat as often as you like."],
      ["Coaching app", "Every session laid out with sets, reps, loads and rest times."],
      ["Loads that adjust", "Rate how hard each set felt and the app adjusts your next load."],
      ["Exercise swaps", "Replace a movement when equipment is taken or something does not feel right."],
      ["Reset and rerun", "Restart any phase at any time to begin your next cycle."],
      ["Ongoing support", "Help with technique, setup and questions while you train."]
    ],
    faq: [
      ["How long is one cycle?", "18 weeks: three phases of six weeks each. Run it two or three times a year, with a few easy days between cycles if you need them."],
      ["Is Deimos for beginners?", "No. Deimos is rated Advanced. You should be comfortable with the deadlift, squat and bench press and know roughly what you can lift. If you are newer, start with the Centurion or HTK system."],
      ["Is the second cycle just a repeat?", "The structure repeats on purpose. The weights do not. Loads are based on your current best lifts, so a stronger you gets a heavier program."],
      ["What equipment do I need?", "A standard gym: barbell, squat rack, bench, incline bench, dumbbells, pull-up bar and dip bars. A medicine ball and band are used in some sessions. Any cardio machine works for the aerobic days."],
      ["Can I buy one phase first?", "Yes. Each phase is sold on its own for $50. The full system is $120, and it is the better deal if you plan to keep going."]
    ]
  },
  { id: "htk", name: "HTK Training System",
    weekTitle: "Six days. Lift, circuit, and cardio.",
    short: "Barbell strength, kettlebell circuits and cardio in one hybrid week. Three phases, beginner to advanced, that loop.",
    phases: ["htk-phase-1", "htk-phase-2", "htk-phase-3"],
    price: "$120",
    link: "https://axios-remote-fitness-coaching.kit.com/products/htk-training-system",
    headline: "Strong, muscular and fit enough to use it.",
    intro: `HTK is a hybrid system. Each week mixes barbell strength work, fast-paced circuits with kettlebells and bodyweight moves, and cardio from short sprints to long easy sessions.

It starts at a beginner level and builds to advanced. By Phase 3 you are lifting heavy, moving fast and recovering quickly.`,
    who: "Anyone who wants to be strong and well-conditioned at the same time, from newer lifters to experienced trainees, and wants one plan to follow for the long term.",
    problem: {
      title: "Strength and fitness, without trading one for the other.",
      body: `Most plans make you choose. Lift heavy and your conditioning drops. Chase fitness and your strength fades.

HTK trains both on purpose. Lifting days build strength and muscle. Circuits and sprints build work capacity. Easy cardio days help you recover. When Phase 3 ends, you start again from your new numbers.`
    },
    week: [
      ["Day 1", "Lift or Circuit", "Bench, squat or deadlift"],
      ["Day 2", "Lift", "Strength or muscle focus"],
      ["Day 3", "Easy Cardio", "20–45 min steady"],
      ["Day 4", "Lift / Power", "Heavy or fast"],
      ["Day 5", "Metabolic Circuit", "Kettlebells, bodyweight"],
      ["Day 6", "Long Cardio", "Longest, easiest day"]
    ],
    weekNote: "Weeks rotate through three types: a muscle week with more reps, a strength-capacity week with moderate weights, and a strength week with heavier weights and fewer reps. The rotation runs twice in each phase.",
    phaseNotes: {
      "htk-phase-1": { label: "Build the base · Beginner", lifts: ["Bench press", "Back squat", "Deadlift", "Kettlebell swings"],
        body: "Learn the HTK week. The three main barbell lifts lead the strength days, with kettlebell and bodyweight circuits and steady cardio to build your base." },
      "htk-phase-2": { label: "Add power · Intermediate", lifts: ["Trap bar deadlifts", "Trap bar jumps", "Kettlebell snatches", "Sprints"],
        body: "More speed and more power. Trap bar work, kettlebell snatches and short sprint intervals join the mix. Top sets reach about 85%." },
      "htk-phase-3": { label: "Raise the ceiling · Advanced", lifts: ["Heavy barbell work", "Clean and press", "Sprint intervals", "Max-effort conditioning"],
        body: "The toughest HTK sessions. Heavy barbell days, power days and hard conditioning intervals bring everything together." }
    },
    loop: {
      title: "Run it again. Start stronger.",
      body: `After Phase 3, go back to Phase 1. You will know the layout, but you will not be the same lifter. Each phase uses percentages of your current best lifts, so the program grows with you.

Each session also adjusts to the day. If a set feels harder or easier than planned, the app tells you how to change the load. Long easy cardio days give you room to recover between hard weeks.`,
      steps: ["Phase 1", "Phase 2", "Phase 3", "New numbers"]
    },
    constant: ["Six-day week: lifting, circuits and cardio", "Three-week rotation of muscle, strength-capacity and strength weeks", "Bench, squat and deadlift at the core", "Easy cardio for recovery every week", "Most sessions 40 to 60 minutes, plus one long, easy cardio day"],
    changes: ["Difficulty rises from Beginner to Advanced", "Power work and sprints are added in Phase 2", "Top sets get heavier", "Your loads rise each cycle as your numbers go up"],
    includes: [
      ["All three phases", "HTK Phases 1, 2 and 3: 18 weeks of programming you can repeat as often as you like."],
      ["Coaching app", "Every session laid out with sets, reps, loads and rest times."],
      ["Loads that adjust", "Rate how hard each set felt and the app adjusts your next load."],
      ["Exercise swaps", "Replace a movement when equipment is taken or something does not feel right."],
      ["Reset and rerun", "Restart any phase at any time to begin your next cycle."],
      ["Ongoing support", "Help with technique, setup and questions while you train."]
    ],
    faq: [
      ["How long is one cycle?", "18 weeks: three phases of six weeks each. Run it two or three times a year, with a few easy days between cycles if you need them."],
      ["I am fairly new to lifting. Can I start HTK?", "Yes. Phase 1 is rated Beginner. It teaches the layout and the main lifts before Phases 2 and 3 add power and harder conditioning."],
      ["Is the second cycle just a repeat?", "The structure repeats on purpose. The weights do not. Loads are based on your current best lifts, so a stronger you gets a heavier program."],
      ["What equipment do I need?", "A full gym: barbell, squat rack, bench, dumbbells, kettlebells, cable machine and pull-up bar. A trap bar, landmine, medicine ball and dip bars are used in some phases. Any cardio machine works for cardio and sprints."],
      ["Can I buy one phase first?", "Yes. Each phase is sold on its own for $50. The full system is $120, and it is the better deal if you plan to keep going."]
    ]
  },
  { id: "centurion", name: "Centurion Training System",
    weekTitle: "Five days. Three strength, two cardio.",
    short: "Squat, bench, deadlift and press on five days a week, with cardio to stay fit. Three phases that loop.",
    phases: ["centurion-phase-1", "centurion-phase-2", "centurion-phase-3"],
    price: "$120",
    link: "https://axios-remote-fitness-coaching.kit.com/products/centurion-training-system",
    headline: "Get strong on the big lifts. Stay fit while you do it.",
    intro: `Centurion is a strength system built on four barbell lifts: the squat, bench press, deadlift and standing press. Three strength days lead with one of them and finish with a short accessory pairing.

Two cardio days mix hard intervals with steady work, so you build strength without losing your fitness.`,
    who: "Lifters who know the main barbell lifts and want to get clearly stronger on them, with a five-day week that still leaves room for life.",
    problem: {
      title: "A clear path to a stronger squat, bench and deadlift.",
      body: `Many strength programs are either too vague or too punishing. You either drift without clear progress or burn out on heavy weights.

Centurion sets a clear path. Phase 1 builds the base. Phase 2 pushes your top sets toward 85 to 90% of your best. Phase 3 locks that strength in. Then you start again from your new numbers.`
    },
    week: [
      ["Day 1", "Strength", "Squat or bench leads"],
      ["Day 2", "Cardio", "Intervals + steady"],
      ["Day 3", "Strength", "Bench or deadlift leads"],
      ["Day 4", "Cardio", "Intervals + steady"],
      ["Day 5", "Strength", "Deadlift or press leads"]
    ],
    weekNote: "Weeks alternate between two types. One week uses moderate weights for more sets and reps. The other goes heavier for fewer reps. Two days a week stay free for rest or other activities.",
    phaseNotes: {
      "centurion-phase-1": { label: "Build the base", lifts: ["Back squat", "Bench press", "Deadlift", "Standing press"],
        body: "Three total-body strength days, each led by a main lift with top sets at 75 to 80%. Cardio days pair hard intervals with steady aerobic work." },
      "centurion-phase-2": { label: "Go heavy", lifts: ["Back squat", "Bench press", "Deadlift", "Bent rows"],
        body: "The heavy phase. Top sets on the squat, bench and deadlift climb toward 85 to 90% over six weeks, with interval cardio to stay conditioned." },
      "centurion-phase-3": { label: "Lock it in", lifts: ["Pause squats", "Close-grip bench", "Standing press", "Deadlifts"],
        body: "High sets of low reps at moderate weights. This makes the strength from Phase 2 stick, so you start the next cycle from a higher base." }
    },
    loop: {
      title: "Run it again. Start stronger.",
      body: `After Phase 3, go back to Phase 1. The lifts are the same, but the weights are not. Each phase uses percentages of your current best lifts, so a stronger squat, bench and deadlift mean a heavier program.

Each session also adjusts to the day. If a set feels harder or easier than planned, the app tells you how to change the load. Cardio stays in every week, so your fitness keeps pace with your strength.`,
      steps: ["Phase 1", "Phase 2", "Phase 3", "New numbers"]
    },
    constant: ["Five-day week: three strength days, two cardio days", "Squat, bench, deadlift and standing press", "Short accessory work after each main lift", "Two cardio days every week", "Sessions of about 30 to 65 minutes"],
    changes: ["Top-set loads rise through Phase 2", "Phase 3 switches to many short sets at moderate weights", "Lift variations change, such as pause squats and close-grip bench", "Your loads rise each cycle as your numbers go up"],
    includes: [
      ["All three phases", "Centurion Phases 1, 2 and 3: 18 weeks of programming you can repeat as often as you like."],
      ["Coaching app", "Every session laid out with sets, reps, loads and rest times."],
      ["Loads that adjust", "Rate how hard each set felt and the app adjusts your next load."],
      ["Exercise swaps", "Replace a movement when equipment is taken or something does not feel right."],
      ["Reset and rerun", "Restart any phase at any time to begin your next cycle."],
      ["Ongoing support", "Help with technique, setup and questions while you train."]
    ],
    faq: [
      ["How long is one cycle?", "18 weeks: three phases of six weeks each. Run it two or three times a year, with a few easy days between cycles if you need them."],
      ["Do I need to know my max lifts?", "It helps to know roughly what you can lift on the squat, bench and deadlift. Loads are set as percentages of your best, and the app adjusts them as you go."],
      ["Is the second cycle just a repeat?", "The structure repeats on purpose. The weights do not. Loads are based on your current best lifts, so a stronger you gets a heavier program."],
      ["What equipment do I need?", "A barbell, squat rack, bench, dumbbells and pull-up bar. An incline bench, medicine ball and dip bars are used in some sessions. Any cardio machine works for the cardio days."],
      ["Can I buy one phase first?", "Yes. Each phase is sold on its own for $50. The full system is $120, and it is the better deal if you plan to keep going."]
    ]
  }
];
