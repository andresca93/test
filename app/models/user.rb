class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]

  def self.get_or_create_by_facebook(auth)
    return nil unless auth.info.email
    if result = ::User.where(:fb_uid => auth.uid).first
      # utente trovato
    else
      result = ::User.where(:email => auth.info.email).first
      result ||= ::User.new(
        :email => auth.info.email
      )
      result.update_attributes!(
        :password => Devise.friendly_token[0,20],
        :fb_email            => auth.info.email,
        :fb_provider         => auth.provider,
        :fb_uid              => auth.uid,
        :fb_name             => auth.info.name,
        :fb_oauth_token      => auth.credentials.token,
        :fb_oauth_expires_at => Time.at(auth.credentials.expires_at)
      )
    end
    return result
  end

  def self.get_or_create_by_instagram(auth)
    return nil unless auth.info.email
    if result = ::User.where(:instagram_uid => auth.uid).first
      # utente trovato
    else
      result = ::User.where(:email => auth.info.email).first
      result ||= ::User.new(
        :email => auth.info.email
      )
      result.update_attributes!(
        :password => Devise.friendly_token[0,20],
        :instagram_email            => auth.info.email,
        :instagram_provider         => auth.provider,
        :instagram_uid              => auth.uid,
        :insatgram_name             => auth.info.name,
        :instagram_oauth_token      => auth.credentials.token,
        :instagram_oauth_expires_at => Time.at(auth.credentials.expires_at)
      )
    end
    return result
  end


  def self.get_or_create_by_google(auth)
    return nil unless auth.info.email
    if result = ::User.where(:gl_uid => auth.uid).first
      # Utente trovato
    else
      result = ::User.where(:gl_email => auth.info.email).first
      result ||= ::User.new(
        :gl_email         => auth.info.email
      )
      result.update_attributes!(
        :gl_email            => auth.info.email,
        :gl_provider         => auth.provider,
        :gl_uid              => auth.uid,
        :gl_name             => auth.info.name,
        :gl_oauth_token      => auth.credentials.token,
        :gl_oauth_expires_at => Time.at(auth.credentials.expires_at)
      )
    end
    return result
  end
end