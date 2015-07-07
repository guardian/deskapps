#!/bin/bash

# Link to the binary
ln -sf /opt/GuardianDeskapp/GuardianDeskapp /usr/local/bin/guardiandeskapp

# Launcher icon
desktop-file-install /opt/GuardianDeskapp/guardiandeskapp.desktop
