import React from "react";
import Accordion from "../../Accordion/Accordion";
import "./Home.css";

const filmHistoryData = [
  {
    title: "Precursors",
    content: (
      <>
        The art of film has drawn on several earlier traditions in fields such
        as oral storytelling, literature, theatre and visual arts. Forms of art
        and entertainment that had already featured moving or projected images
        include:
        <ul>
          <li>shadowgraphy, probably used since prehistoric times</li>
          <li>
            camera obscura, a natural phenomenon that has possibly been used as
            an artistic aid since prehistoric times
          </li>
          <li>
            shadow puppetry, possibly originated around 200 BCE in Central Asia,
            India, Indonesia or China
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Before Celluloid",
    content: (
      <>
        <p>
          The stroboscopic animation principle was introduced in 1833 with the
          stroboscopic disc (better known as the phénakisticope) and later
          applied in the zoetrope (since 1866), the flip book (since 1868), and
          the praxinoscope (since 1877), before it became the basic principle
          for cinematography.
        </p>
        <p>
          Experiments with early phénakisticope-based animation projectors were
          made at least as early as 1843 and publicly screened in 1847. Jules
          Duboscq marketed phénakisticope projection systems in France from
          c. 1853 until the 1890s.
        </p>
        <p>
          Photography was introduced in 1839, but initially photographic
          emulsions needed such long exposures that the recording of moving
          subjects seemed impossible. At least as early as 1844, photographic
          series of subjects posed in different positions were created to either
          suggest a motion sequence or document a range of different viewing
          angles. The advent of stereoscopic photography, with early experiments
          in the 1840s and commercial success since the early 1850s, raised
          interest in completing the photographic medium with the addition of
          means to capture colour and motion. In 1849, Joseph Plateau published
          about the idea to combine his invention of the phénakisticope with the
          stereoscope, as suggested to him by stereoscope inventor Charles
          Wheatstone, and to use photographs of plaster sculptures in different
          positions to be animated in the combined device. In 1852, Jules
          Duboscq patented such an instrument as the "Stéréoscope-fantascope, ou
          Bïoscope", but he only marketed it very briefly, without success. One
          Bïoscope disc with stereoscopic photographs of a machine is in the
          Plateau collection of Ghent University, but no instruments or other
          discs have yet been found.
        </p>

        <p>
          An animation of the retouched Sallie Garner card from The Horse in
          Motion series (1878–1879) by Muybridge By the late 1850s the first
          examples of instantaneous photography came about and provided hope
          that motion photography would soon be possible, but it took a few
          decades before it was successfully combined with a method to record
          series of sequential images in real-time. In 1878, Eadweard Muybridge
          eventually managed to take a series of photographs of a running horse
          with a battery of cameras in a line along the track and published the
          results as The Horse in Motion on cabinet cards. Muybridge, as well as
          Étienne-Jules Marey, Ottomar Anschütz and many others, would create
          many more chronophotography studies. Muybridge had the contours of
          dozens of his chronophotographic series traced onto glass discs and
          projected them with his zoopraxiscope in his lectures from 1880 to
          1895.
        </p>

        <p>
          An Anschütz electrotachyscope American Scientific, 16/11/1889, p. 303
          Anschütz made his first instantaneous photographs in 1881. He
          developed a portable camera that allowed shutter speeds as short as
          1/1000 of a second in 1882. The quality of his pictures was generally
          regarded to be much higher than that of the chronophotography works
          Muybridge and Étienne-Jules Marey. In 1886, Anschütz developed the
          Electrotachyscope, an early device that displayed short motion picture
          loops with 24 glass plate photographs on a 1.5 meter wide rotating
          wheel that was hand-cranked to the speed of circa 30 frames per
          second. Different versions were shown at many international
          exhibitions, fairs, conventions and arcades from 1887 until at least
          1894. Starting in 1891, some 152 examples of a coin-operated peep-box
          Electrotachyscope model were manufactured by Siemens & Halske in
          Berlin and sold internationally. Nearly 34,000 people paid to see it
          at the Berlin Exhibition Park in summer 1892. Others saw it in London
          or at the 1893 Chicago World's Fair.On 25 November 1894, Anschütz
          introduced a Electrotachyscope projector with a 6x8 meter screening in
          Berlin. Between 22 February and 30 March 1895, a total of circa 7,000
          paying customers came to view a 1.5-hour show of some 40 scenes at a
          300-seat hall in the old Reichstag building in Berlin.
        </p>
        <p>
          Duration: 4 minutes and 59 seconds.4:59 Pauvre Pierrot (1892)
          repainted clip Émile Reynaud already mentioned the possibility of
          projecting the images of the Praxinoscope in his 1877 patent
          application. He presented a praxinoscope projection device at the
          Société française de photographie on 4 June 1880, but did not market
          his praxinoscope a projection before 1882. He then further developed
          the device into the Théâtre Optique which could project longer
          sequences with separate backgrounds, patented in 1888. He created
          several movies for the machine by painting images on hundreds of
          gelatin plates that were mounted into cardboard frames and attached to
          a cloth band. From 28 October 1892 to March 1900 Reynaud gave over
          12,800 shows to a total of over 500,000 visitors at the Musée Grévin
          in Paris.
        </p>
      </>
    ),
  },
  {
    title: "First Motion Pictures",
    content: (
      <>
        <p>
          By the end of the 1880s, the introduction of lengths of celluloid
          photographic film and the invention of motion picture cameras, which
          could photograph a rapid sequence of images using only one lens,
          allowed action to be captured and stored on a single compact reel of
          film.
        </p>

        <p>
          Movies were initially shown publicly to one person at a time through
          "peep show" devices such as the Electrotachyscope, Kinetoscope and the
          Mutoscope. Not much later, exhibitors managed to project films on
          large screens for theatre audiences.
        </p>

        <p>
          The first public screenings of films at which admission was charged
          were made in 1895 by the American Woodville Latham and his sons, using
          films produced by their Eidoloscope company, by the Skladanowsky
          brothers and by the – arguably better known – French brothers Auguste
          and Louis Lumière with ten of their own productions. Private
          screenings had preceded these by several months, with Latham's
          slightly predating the others´s.
        </p>
      </>
    ),
  },
  {
    title: "Early Evolution",
    content: (
      <>
        <p>
          The earliest films were simply one static shot that showed an event or
          action with no editing or other cinematic techniques. Typical films
          showed employees leaving a factory gate, people walking in the street,
          and the view from the front of a trolley as it traveled a city's Main
          Street. According to legend, when a film showed a locomotive at high
          speed approaching the audience, the audience panicked and ran from the
          theater. Around the turn of the 20th century, films started stringing
          several scenes together to tell a story. (The filmmakers who first put
          several shots or scenes discovered that, when one shot follows
          another, that act establishes a relationship between the content in
          the separate shots in the minds of the viewer. It is this relationship
          that makes all film storytelling possible. In a simple example, if a
          person is shown looking out a window, whatever the next shot shows, it
          will be regarded as the view the person was seeing.) Each scene was a
          single stationary shot with the action occurring before it. The scenes
          were later broken up into multiple shots photographed from different
          distances and angles. Other techniques such as camera movement were
          developed as effective ways to tell a story with film. Until sound
          film became commercially practical in the late 1920s, motion pictures
          were a purely visual art, but these innovative silent films had gained
          a hold on the public imagination. Rather than leave audiences with
          only the noise of the projector as an accompaniment, theater owners
          hired a pianist or organist or, in large urban theaters, a full
          orchestra to play music that fit the mood of the film at any given
          moment. By the early 1920s, most films came with a prepared list of
          sheet music to be used for this purpose, and complete film scores were
          composed for major productions.
        </p>

        <p>
          The rise of European cinema was interrupted by the outbreak of World
          War I, while the film industry in the United States flourished with
          the rise of Hollywood, typified most prominently by the innovative
          work of D. W. Griffith in The Birth of a Nation (1915) and Intolerance
          (1916). However, in the 1920s, European filmmakers such as Eisenstein,
          F. W. Murnau and Fritz Lang, in many ways inspired by the meteoric
          wartime progress of film through Griffith, along with the
          contributions of Charles Chaplin, Buster Keaton and others, quickly
          caught up with American film-making and continued to further advance
          the medium.
        </p>
      </>
    ),
  },
  {
    title: "Sound",
    content: (
      <>
        <p>
          In the 1920s, the development of electronic sound recording
          technologies made it practical to incorporate a soundtrack of speech,
          music and sound effects synchronized with the action on the
          screen.[citation needed] The resulting sound films were initially
          distinguished from the usual silent "moving pictures" or "movies" by
          calling them "talking pictures" or "talkies."[citation needed] The
          revolution they wrought was swift. By 1930, silent film was
          practically extinct in the US and already being referred to as "the
          old medium."
        </p>
        <p>
          The evolution of sound in cinema began with the idea of combining
          moving images with existing phonograph sound technology. Early
          sound-film systems, such as Thomas Edison's Kinetoscope and the
          Vitaphone used by Warner Bros., laid the groundwork for synchronized
          sound in film. The Vitaphone system, produced alongside Bell Telephone
          Company and Western Electric, faced initial resistance due to
          expensive equipping costs, but sound in cinema gained acceptance with
          movies like Don Juan (1926) and The Jazz Singer (1927).
        </p>
        <p>
          American film studios, while Europe standardized on Tobis-Klangfilm
          and Tri-Ergon systems. This new technology allowed for greater
          fluidity in film, giving rise to more complex and epic movies like
          King Kong (1933).
        </p>
        <p>
          As the television threat emerged in the 1940s and 1950s, the film
          industry needed to innovate to attract audiences. In terms of sound
          technology, this meant the development of surround sound and more
          sophisticated audio systems, such as Cinerama's seven-channel system.
          However, these advances required a large number of personnel to
          operate the equipment and maintain the sound experience in theaters.
        </p>
        <p>
          In 1966, Dolby Laboratories introduced the Dolby A noise reduction
          system, which became a standard in the recording industry and
          eliminated the hissing sound associated with earlier standardization
          efforts. Dolby Stereo, a revolutionary surround sound system, followed
          and allowed cinema designers to take acoustics into consideration when
          designing theaters. This innovation enabled audiences in smaller
          venues to enjoy comparable audio experiences to those in larger city
          theaters.
        </p>
        <p>
          Today, the future of sound in film remains uncertain, with potential
          influences from artificial intelligence, remastered audio, and
          personal viewing experiences shaping its development. However, it is
          clear that the evolution of sound in cinema has been marked by
          continuous innovation and a desire to create more immersive and
          engaging experiences for audiences.
        </p>
      </>
    ),
  },
  {
    title: "Color",
    content: (
      <>
        <p>
          A significant technological advancement in film was the introduction
          of "natural color," where color was captured directly from nature
          through photography, as opposed to being manually added to
          black-and-white prints using techniques like hand-coloring or
          stencil-coloring. Early color processes often produced colors that
          appeared far from "natural". Unlike the rapid transition from silent
          films to sound films, color's replacement of black-and-white happened
          more gradually.
        </p>
        <p>
          The crucial innovation was the three-strip version of the Technicolor
          process, first used in animated cartoons in 1932. The process was
          later applied to live-action short films, specific sequences in
          feature films, and finally, for an entire feature film, Becky Sharp,
          in 1935. Although the process was expensive, the positive public
          response, as evidenced by increased box office revenue, generally
          justified the additional cost. Consequently, the number of films made
          in color gradually increased year after year.
        </p>
      </>
    ),
  },
  {
    title: "1950s: Growing Influence of Television",
    content: (
      <>
        <p>
          In the early 1950s, the proliferation of black-and-white television
          started seriously depressing North American theater
          attendance.[citation needed] In an attempt to lure audiences back into
          theaters, bigger screens were installed, widescreen processes,
          polarized 3D projection, and stereophonic sound were introduced, and
          more films were made in color, which soon became the rule rather than
          the exception. Some important mainstream Hollywood films were still
          being made in black-and-white as late as the mid-1960s, but they
          marked the end of an era. Color television receivers had been
          available in the US since the mid-1950s, but at first, they were very
          expensive and few broadcasts were in color. During the 1960s, prices
          gradually came down, color broadcasts became common, and sales boomed.
          The overwhelming public verdict in favor of color was clear. After the
          final flurry of black-and-white films had been released in mid-decade,
          all Hollywood studio productions were filmed in color, with the usual
          exceptions made only at the insistence of "star" filmmakers such as
          Peter Bogdanovich and Martin Scorsese.
        </p>
      </>
    ),
  },
  {
    title: "1960s and Beyond",
    content: (
      <>
        <p>
          Salah Zulfikar, one of the most popular actors in the golden age of
          Egyptian Cinema The decades following the decline of the studio system
          in the 1960s saw changes in the production and style of film. Various
          New Wave movements (including the French New Wave, New German Cinema
          wave, Indian New Wave, Japanese New Wave, New Hollywood, and Egyptian
          New Wave) and the rise of film-school-educated independent filmmakers
          contributed to the changes the medium experienced in the latter half
          of the 20th century. Digital technology has been the driving force for
          change throughout the 1990s and into the 2000s. Digital 3D projection
          largely replaced earlier problem-prone 3D film systems and has become
          popular in the early 2010s.
        </p>
      </>
    ),
  },
];

function HomePage() {
  return (
    <main className="home-page" id="main">
      <h2 className="home-page__title">Film History</h2>
      <div className="home-page__content">
        <div className="home-page__preview">
          <h3>Film Histoy Preview</h3>
          <p>
            Film history encompasses the evolution of the medium from its
            infancy to the present day. Notable points in the development of
            cinema include:
          </p>
          <ol>
            <li>
              <strong>Precursors:</strong> The art of film has roots in older
              traditions like oral storytelling, literature, theatre, and visual
              arts.
            </li>
            <li>
              <strong>Before Celluloid:</strong> Motion pictures began to
              capture the human form and movement before the advent of celluloid
              film.
            </li>
            <li>
              <strong>First Motion Pictures:</strong> The invention of film
              technology allowed for the first moving pictures to be recorded
              and viewed by an audience.
            </li>
            <li>
              <strong>Early Evolution:</strong> Cinema quickly evolved as a form
              of entertainment and artistic expression with silent films, the
              establishment of Hollywood, and the star system.
            </li>
            <li>
              <strong>Sound:</strong> 'Talkies' revolutionized the film
              industry, adding a new dimension to movies with synchronized
              soundtracks.
            </li>
            <li>
              <strong>Color:</strong> Though films began in black and white,
              color film technology brought movies to life in vivid detail.
            </li>
            <li>
              <strong>1950s: Growing Influence of Television:</strong> As
              television became a household medium, the film industry adapted
              with changes like widescreen formats to attract viewers back to
              theaters.
            </li>
            <li>
              <strong>1960s and Beyond:</strong> The film industry continued to
              evolve through various movements such as the New Hollywood era and
              the rise of blockbuster films, continually adapting to changes in
              technology, distribution, and audience tastes.
            </li>
          </ol>
        </div>
        <Accordion className={"home-page__accordion"} items={filmHistoryData} />
      </div>
    </main>
  );
}

export default HomePage;
