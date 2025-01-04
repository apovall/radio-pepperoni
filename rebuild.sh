# Manually installing (via dietpi-software LXDE, Firefox, X11)

sudo apt install xinit xserver-xorg firefox-esr mesa-utils openbox
# sudo apt install fonts-dejavu fonts-dejavu-core fonts-dejavu-extra fonts-droid-fallback fonts-freefont-ttf fonts-liberation fonts-lmodern fonts-lyx fonts-noto-mono fonts-texgyre
# Will display browser directly instead of just running exec openbox-session
echo "exec firefox-esr --kiosk http://localhost:8000" >> ~/.xinitrc
echo "Configuration added to ~/.xinitrc"
sudo usermod -aG video rootmd

# automatically start on boot:
# sudo nano /etc/systemd/system/browser.service
#cat << EOF > ~/.xinitrc
#[Unit]
#Description=Start Browser
#After=multi-user.target

#[Service]
#User=rootmd
#Environment=DISPLAY=:0
#ExecStart=/usr/bin/startx

#[Install]
#WantedBy=multi-user.target
#EOF