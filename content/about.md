+++
title = "Brian Xiang - About"
template = "base.html"
+++

# about me

## the setup

i'm currently daily-driving a <mark>2020 m1 macbook air</mark> and a <mark>windows desktop</mark> running WSL2. some of
my favorite programs:

- [kitty](https://sw.kovidgoyal.net/kitty/) (terminal emulator)
- [fish](https://fishshell.com/) (my favorite shell, zsh is terrible 😠)
- [tmux](https://github.com/tmux/tmux/) (multiplexing & terminal pane management)
- [Rectangle](https://rectangleapp.com/) (window positioning)
- [Raycast](https://www.raycast.com/) (launcher alternative)
- [Tailscale](https://tailscale.com/) (zero-config personal VPN)

if you're interested in my config files, check out my {{ ghlink(repo="dotfiles") }}.

## music

i'm a big fan of <span class="music-genres">[...]</span>. my top 5 Spotify artists from the last 4 weeks of listening are:

<ul class="music-songs"></ul>

this information is ~~stolen~~ fetched from [stats.fm](https://stats.fm/) in real time. you can check out my profile over [there](https://stats.fm/cf12). big shout outs to [Sjoerd Bolten](https://sjoerd.dev/) (the creator of [stats.fm](https://stats.fm)).

## CTFs

i used to play in [CTFs](https://ctf101.org/) on the team [L Distribution](https://ctftime.org/team/45894). some of our
notable achievements:

- <mark>2nd</mark> place UMDCTF 2020
- <mark>5th</mark> place TJCTF 2020
- <mark>14th</mark> place picoCTF 2019
- <mark>29th</mark> in country on CTFTime 2020

i highly recommend trying CTFs out if you're interested in cybersecurity, puzzles, and/or coding in general. they're
super fun, and i learned a fuck ton about system architecture, web security, networking, compilers, cryptography, and C
from participating in CTFs.

if you wanna read some of my old shitty writeups, you can find them [here](https://github.com/cf12/ctf/) lol.

## vimpossible (to live without)

i'm a heavy vim user, but my [config](https://github.com/cf12/dotfiles/blob/master/src/common/.vimrc) has always been
kinda sketchy and pretty barebones. people freak out at me because i use the [vim
extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) for VSCode exclusively, but i hate how
ikcy default vim/nvim feel. maybe i'm just an electron shill, idk.

here's a funny clip of [georgehotz](https://geohot.com/) using vim in vscode. i think it sums up my
approach to vim (and maybe life too) pretty well.

<iframe
    src="https://clips.twitch.tv/embed?clip=TardyFairGrouseEagleEye-bE9w2UC3sa45d6Pj&parent=localhost&parent=cf12.org"
    frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

## ... and more

i might add more here idk i'll have to see. maybe i'll start a blog 👀

<script>
    const genres = document.querySelector(".music-genres")
    const songs = document.querySelector(".music-songs")

    // https://stackoverflow.com/a/32180863
    function msToTime(ms) {
        let seconds = (ms / 1000).toFixed(2);
        let minutes = (ms / (1000 * 60)).toFixed(2);
        let hours = (ms / (1000 * 60 * 60)).toFixed(2);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed(2);
        if (seconds < 60) return seconds + " seconds";
        else if (minutes < 60) return minutes + " minutes";
        else if (hours < 24) return hours + " hours";
        else return days + " days"
    }

    fetch("https://beta-api.stats.fm/api/v1/users/cf12/top/genres?range=weeks")
        .then(res => res.json())
        .then(({ items }) => {
            genres.textContent = ""

            items.slice(0, 3).forEach(e => {
                const m = document.createElement('mark')
                m.textContent = e.genre.tag
                genres.appendChild(m)
                genres.appendChild(document.createTextNode(", "))
            })

            genres.appendChild(document.createTextNode("and "))
            const m = document.createElement('mark')
            m.textContent = items[3].genre.tag
            genres.appendChild(m)
        })

    fetch("https://beta-api.stats.fm/api/v1/users/cf12/top/artists?range=weeks")
        .then(res => res.json())
        .then(({ items }) => {
            items.slice(0, 5).forEach((e) => {
                const { artist: { externalIds: { spotify }, name }, playedMs } = e
                const m = document.createElement('li')
                const n = document.createElement('a')
                n.href = `https://open.spotify.com/artist/${spotify}`
                n.textContent = name
                m.appendChild(n)
                m.appendChild(document.createTextNode(` - ${msToTime(playedMs)}`))
                songs.appendChild(m)
            })
        })
</script>
