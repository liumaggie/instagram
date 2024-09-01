# Workaround to fix problem with Paperclip and latest version of aws-sdk
Aws::VERSION =  Gem.loaded_specs["aws-sdk"].version