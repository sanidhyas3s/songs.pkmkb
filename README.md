# songs.pkmkb Skip Pakistani Channels on YouTube

Automatically skips songs by artists whose **YouTube channel** lists **Pakistan** as their country.

This extension is intended for users who, due to **ongoing India-Pakistan tensions**, prefer not to engage with content from Pakistani artists.


## ⚙️ Features

- ✅ Works on **YouTube** (soon on YT Music and Spotify)
- 🌍 Detects artist country from their **channel's About page**
- 🔁 Automatically skips any video where the uploader is from **Pakistan**
- 🧠 Caches results to avoid repeat lookups


## 📦 Installation

1. **Download / Clone** this repository:
   ```bash
   git clone https://github.com/sanidhyas3s/songs.pkmkb.git
   ```

2. **Open Chrome** and go to:
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (toggle at the top right)

4. Click **Load unpacked** and select the folder you just cloned (`songs.pkmkb/`)

5. You're done ✅ — the extension runs silently in the background on:
   - [YouTube](https://www.youtube.com)


## 🧪 How it works

- When a new video plays, the extension:
  1. Extracts the **channel/artist URL**
  2. Fetches the `/about` page of that artist
  3. If the page contains the word `"Pakistan"` → skips the video

No channel names are hardcoded — the check is based entirely on the **publicly listed country** in the artist’s profile.


## ❗ Note

This extension is **not intended to promote hate**, but instead reflects personal (and in-demand) content preferences in the context of the **India–Pakistan conflict**.

You are free to modify or extend this tool to suit your needs.


## 📌 Disclaimer

This is a personal-use extension. It:
- Does not collect or store any personal data.
- Does not modify YouTube beyond basic UI automation.
- Is not affiliated with Google or YouTube in any way.


## 📜 License

MIT License — do whatever you want, but don’t blame me if YouTube breaks stuff.
