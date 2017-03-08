use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
config :holyjs, Holyjs.Endpoint,
  secret_key_base: "2wkqsQEtjfYOot7lYMIQWd/tUnBn+m84uNhBe22mcXBZ/8eDzrWHFVK7tcXobzcH"

# Configure your database
config :holyjs, Holyjs.Repo,
  adapter: Ecto.Adapters.MySQL,
  username: "root",
  password: "",
  database: "holyjs_prod",
  pool_size: 20
