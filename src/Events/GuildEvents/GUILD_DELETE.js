class GUILD_DELETE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("GuildDeleted", packet);
  }
}

module.exports = GUILD_DELETE;
