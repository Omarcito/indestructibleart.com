# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "public/stylesheets/"
sass_dir = "scss"
images_dir = "public/images"
javascripts_dir = "public/js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# see if a shell command exists
def which(cmd)
  exts = ENV['PATHEXT'] ? ENV['PATHEXT'].split(';') : ['']
  ENV['PATH'].split(File::PATH_SEPARATOR).each do |path|
    exts.each { |ext|
      exe = File.join(path, "#{cmd}#{ext}")
      return exe if File.executable? exe
    }
  end
  return nil
end
 
# Callback for triggering grunt-related tasks
on_stylesheet_saved do |filename|
  rel = filename.split(Dir.pwd.to_s)[1].sub('/', '')
  
  if which('grunt') != nil
    # Change the grunt command to anything you want
    system("grunt compass:minify --file=#{rel}")
  else 
    puts 'Please install Node.JS w/ Grunt to fire Compass compile callback to minify production version of CSS file'
  end
end


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
