#!/bin/zsh

set -u

PROJECT_DIR="${0:A:h}"
cd "$PROJECT_DIR" || exit 1

# Pick up common local Node installs when launched from Finder.
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.volta/bin:$PATH"

pause_on_error() {
  printf "\nPress return to close..."
  read
}

fail() {
  printf "%s\n" "$1"
  pause_on_error
  exit 1
}

for shell_init in "$HOME/.zprofile" "$HOME/.zshrc" "$HOME/.profile"; do
  if [ -f "$shell_init" ]; then
    # shellcheck disable=SC1090
    source "$shell_init"
  fi
done

if [ -s "$HOME/.nvm/nvm.sh" ]; then
  export NVM_DIR="$HOME/.nvm"
  # shellcheck disable=SC1091
  source "$NVM_DIR/nvm.sh"
fi

if [ -s "$HOME/.asdf/asdf.sh" ]; then
  # shellcheck disable=SC1091
  source "$HOME/.asdf/asdf.sh"
fi

if ! command -v npm >/dev/null 2>&1; then
  fail "npm was not found. Install Node.js 20 or newer, then run Preview.command again."
fi

if [ ! -d node_modules ]; then
  printf "Installing dependencies...\n"
  npm install || fail "npm install failed."
fi

printf "Starting preview server at http://127.0.0.1:5173 ...\n"
npm run start
