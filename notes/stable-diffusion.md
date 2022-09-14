# Stable Diffusion

Set UP WSL

## Setup

> sudo apt-get update

> python3 --versionc

> sudo apt-get install python3


Install Conda

https://docs.conda.io/en/latest/miniconda.html#installing

download script to r

run the script in wsl

run conda init

restart wsl to reload

cd stable-diffusion

> conda env create -f environment.yaml

> conda activate ldm


Before running

> cd /mnt/r/stable-diffusion

> conda activate ldm

> python scripts/txt2img.py --prompt "a photograph of an astronaut riding a horse" --plms