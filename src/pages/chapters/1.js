import ChapterLayout from '#src/components/chapter-layout.js';
import ChapterQuestion from '#src/components/chapter-question.js';
import Page from '#src/components/page.js';

const Paragraph = ({ children }) => <p className='mb-3'>{children}</p>;

export default () => (
  <Page title="Chapter One | The Builder's Choice">
    <ChapterLayout id='1'>
      <p className='italic mb-6'>Select the items you agree with.</p>
      <div id='questions-container' className='space-y-6'>
        <ChapterQuestion
          id='troy-1'
          question='I imitate patterns from the past without questioning them.'
          value='-1'
        >
          <Paragraph>
            Copying the past without testing it just repeats failure. Ask: “Is
            this worth honoring — or worth ending?”
          </Paragraph>
          <Paragraph>
            Troy’s father’s path feels safe because it’s familiar — but familiar
            doesn’t always mean wise.
          </Paragraph>
          <Paragraph>Blind loyalty isn’t honor. It’s a trap.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-2'
          question='I work harder instead of smarter.'
          value='-1'
        >
          <Paragraph>
            Effort without systems drains profit and energy. Build one process
            today that saves you tomorrow.
          </Paragraph>
          <Paragraph>
            You can swing harder all day, but without the right tool, you’re
            just exhausting yourself.
          </Paragraph>
          <Paragraph>
            Hustle feels heroic — but it’s just avoidance in disguise.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-3'
          question='I avoid conflict or tough conversations.'
          value='-1'
        >
          <Paragraph>
            What you don’t face compounds into chaos. Lead one honest
            conversation this week.
          </Paragraph>
          <Paragraph>
            Avoidance feels like peace in the moment, but it’s a mortgage with
            interest due later.
          </Paragraph>
          <Paragraph>
            If you don’t lead the hard talk, someone else will — and it won’t be
            for your good.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-4'
          question='I repress or bury my emotions.'
          value='-1'
        >
          <Paragraph>
            Buried pain leaks out as anger or apathy. Naming it is the first
            step to releasing it.
          </Paragraph>
          <Paragraph>
            Strength isn’t silence — it’s having the courage to feel without
            being undone.
          </Paragraph>
          <Paragraph>What you bury alive eventually runs your life.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-5'
          question='I glorify silent sacrifice.'
          value='-1'
        >
          <Paragraph>
            Sacrifice only matters if it builds something. Don’t bleed
            privately; lead visibly.
          </Paragraph>
          <Paragraph>
            Suffering doesn’t equal strength. Sometimes it’s just loneliness
            with a mask on.
          </Paragraph>
          <Paragraph>Unseen sacrifice turns into unseen resentment.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-6'
          question='I settle for surface-level advice.'
          value='-1'
        >
          <Paragraph>
            Clichés don’t change lives. Seek wisdom from those who broke the
            cycle, not those stuck in it.
          </Paragraph>
          <Paragraph>
            “That’s just the way it is” is the anthem of people who never left
            the cage.
          </Paragraph>
          <Paragraph>Shallow advice keeps you in shallow water.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-7'
          question='I keep financial struggles hidden.'
          value='-1'
        >
          <Paragraph>
            Numbers don’t get better by hiding them. Truth with money builds
            trust at home and at work.
          </Paragraph>
          <Paragraph>
            Covering the books feels protective, but it erodes the foundation
            you’re trying to save.
          </Paragraph>
          <Paragraph>
            What you hide in the dark costs double in the light.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-8'
          question='I try to “be the man” instead of becoming myself.'
          value='-1'
        >
          <Paragraph>
            Living out someone else’s script robs you of your own success.
            Rewrite the story as yours.
          </Paragraph>
          <Paragraph>
            The version of manhood you inherited may never have worked in the
            first place.
          </Paragraph>
          <Paragraph>Imitation kills identity.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-9'
          question='I find comfort in familiar failure.'
          value='-1'
        >
          <Paragraph>
            Comfort zones don’t create change. Step into one unfamiliar action
            this week.
          </Paragraph>
          <Paragraph>
            The stool at the same bar feels safe, but it’s also the seat of your
            slow decline.
          </Paragraph>
          <Paragraph>Familiar failure is still failure.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='troy-10'
          question='I confuse good intentions with real change.'
          value='-1'
        >
          <Paragraph>
            Intentions are a start, but only structure and accountability make
            transformation real.
          </Paragraph>
          <Paragraph>
            Wanting to change is different than building the scaffolding for
            change.
          </Paragraph>
          <Paragraph>Intentions don’t count on the scoreboard.</Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-1'
          question='I question the past and look for lessons.'
          value='1'
        >
          <Paragraph>
            You’re wise to pause and reflect. Keep sorting out what worked and
            what failed — that’s how you build differently.
          </Paragraph>
          <Paragraph>
            Every legacy carries both wisdom and wounds. You’re showing strength
            by separating the two.
          </Paragraph>
          <Paragraph>
            You’re on the right path when you honor the past without copying it.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-2'
          question='I allow myself to feel and process pain.'
          value='1'
        >
          <Paragraph>
            This takes courage. Keep leaning in — what you let yourself feel,
            you’ll eventually heal.
          </Paragraph>
          <Paragraph>
            Your willingness to face pain is already setting you apart from
            those who bury it.
          </Paragraph>
          <Paragraph>
            Feeling deeply isn’t weakness — it’s proof you’re alive and growing.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-3'
          question='I connect memory to meaning.'
          value='1'
        >
          <Paragraph>
            You’re using the past the right way — as a teacher, not a prison.
            Keep pulling lessons forward.
          </Paragraph>
          <Paragraph>
            You’re showing wisdom by turning memories into insight instead of
            nostalgia.
          </Paragraph>
          <Paragraph>
            Keep it up — you’re building a future from the best parts of your
            past.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-4'
          question='I value encouragement and mentors.'
          value='1'
        >
          <Paragraph>
            You’re smart to keep mentors in your corner. That humility will
            accelerate everything.
          </Paragraph>
          <Paragraph>
            Staying open to encouragement proves you know growth isn’t a solo
            project.
          </Paragraph>
          <Paragraph>
            You’re on track — every great builder multiplies faster with voices
            of belief around them.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-5'
          question='I own the emotional walls I’ve built.'
          value='1'
        >
          <Paragraph>
            Awareness is strength. Keep choosing to open the gate instead of
            hiding behind the wall.
          </Paragraph>
          <Paragraph>
            You’re showing leadership by naming your defenses — that’s how they
            lose power.
          </Paragraph>
          <Paragraph>
            Stay with it — the walls don’t define you. Your choice to face them
            does.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-6'
          question='I burn for something different.'
          value='1'
        >
          <Paragraph>
            That fire is a gift. Keep feeding it with action, not just
            frustration.
          </Paragraph>
          <Paragraph>
            Your hunger for change is proof you’re meant for more — keep moving
            toward it.
          </Paragraph>
          <Paragraph>
            Stay restless. It’s a compass pointing you forward.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-7'
          question='I see beyond survival toward vision.'
          value='1'
        >
          <Paragraph>
            You’re right to want more than “just enough.” Keep letting vision
            pull you into new territory.
          </Paragraph>
          <Paragraph>
            Your focus on the future is fuel — don’t lose it in the grind.
          </Paragraph>
          <Paragraph>
            Keep going — survival maintains, but vision multiplies.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-8'
          question='I honor without copying.'
          value='1'
        >
          <Paragraph>
            This is real wisdom. Keep respecting the past by evolving it, not
            repeating it.
          </Paragraph>
          <Paragraph>
            You’re walking a healthy line: honoring your roots while carving
            your own path.
          </Paragraph>
          <Paragraph>
            Stay the course — copying is easy, but evolving is leadership.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-9'
          question='I keep learning and growing.'
          value='1'
        >
          <Paragraph>
            That curiosity is your edge. Keep feeding it — it compounds over
            time.
          </Paragraph>
          <Paragraph>
            Your commitment to growth is proof you’ll never stagnate. Stay at
            it.
          </Paragraph>
          <Paragraph>
            Keep going — when you keep learning, you keep winning.
          </Paragraph>
        </ChapterQuestion>

        <ChapterQuestion
          id='jacob-10'
          question='I find strength in vulnerability.'
          value='1'
        >
          <Paragraph>
            This is real courage. Keep choosing honesty over perfection — it
            inspires others too.
          </Paragraph>
          <Paragraph>
            Your willingness to be open is creating trust around you. Stay with
            it.
          </Paragraph>
          <Paragraph>
            Keep leading with vulnerability — it’s your greatest strength in
            disguise.
          </Paragraph>
        </ChapterQuestion>
      </div>
    </ChapterLayout>
  </Page>
);
